<style>
</style>
<template>
  <div>
    <Apply></Apply>
    <Apply></Apply>
    <Apply></Apply>
    <!--未和后端数据对接版本-->
    <div style="text-align:center">
      <Page :total="100" show-elevator/>
    </div>
  </div>
</template>
<script>
import Apply from "./Apply.vue";
export default {
  components: {
    Apply
  }
};
</script>
