<template>
  <div>
    <HomeNavbar />
    <router-view></router-view>
    <!-- FOOTER -->
    <HomeFooter />
  </div>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar'
import HomeFooter from '@/components/HomeFooter'
export default {
  data () {
    return {
      ad: true
    }
  },
  components: {
    HomeNavbar,
    HomeFooter
  }
}
</script>
