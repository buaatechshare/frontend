<template>
  <div id="app">
    <router-view></router-view>
    <footer style="height:100px"></footer>
    <BackTop></BackTop>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
