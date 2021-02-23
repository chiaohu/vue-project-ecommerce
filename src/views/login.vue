<template>
  <div>
    <div class="full-page">
      <Alert></Alert>
      <div class="card shadow form-signin backGroung">
        <div class="card-body">
          <form class="form-signin" @submit.prevent="singin">
            <h1 class="h3 mb-3 font-weight-normal">後台管理</h1>
            <label for="inputEmail" class="sr-only">電子信箱(Email address)</label>
            <input
              type="email"
              v-model="user.username"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputPassword" class="sr-only">密碼(Password)</label>
            <input
              type="password"
              v-model="user.password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="btn btn-lg btn-warning  btn-block" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/AlertMessage'

export default {
  name: 'HelloWorld',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    singin () {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      const vm = this
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          const token = response.data.token
          const exoired = response.data.expired
          document.cookie = `hexToken=${token}; expires=${new Date(exoired)};`
          vm.$router.push('/admin/products')
        } else {
          this.$bus.$emit('message:push', '登入失敗', 'danger')
        }
      })
    }
  },
  components: {
    Alert
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

h1 {
  font-weight: bold;
  font-size: 36px;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #fff;
}

.full-page{
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  /*background-color: #dee2e6;*/
  background-image: url(../../img/banner/login.jpg);
  background-position: center;
  background-size: cover;
}
.backGroung {
  border-radius: 20px;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
