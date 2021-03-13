<template>
  <div>
    <nav
      class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <router-link class="navbar-brand col-md-3 col-lg-2 me-0 px-3 mt-2 mb-2" to="/"
        >Arrivederci</router-link
      >
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <button
            type="button"
            class="btn btn-danger"
            @click.prevent="signOut()"
          >
            登出
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signOut () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/logout`
      vm.$http.post(url, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          vm.$router.push('/')
        }
      })
    }
  }
}
</script>
