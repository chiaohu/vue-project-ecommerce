<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app{
  min-height: 100%;
  position: relative;
}
body {
  height: 100%;
}
@import "./assets/all";
</style>
