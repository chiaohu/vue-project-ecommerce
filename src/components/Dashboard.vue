<template>
  <div>
    <Navbar />
    <AlertMessage />
    <div class="container">
      <div class="row">
        <sidebar></sidebar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AlertMessage from './AlertMessage'
export default {
  components: {
    Navbar,
    Sidebar,
    AlertMessage
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = `${token}`
  }
}
</script>
