<style>
</style>
<template>
  <div>
    <Source></Source>
    <Source></Source>
    <!--未和后端数据对接版本-->
    <div style="text-align:center">
      <Page :total="100" show-elevator/>
    </div>
  </div>
</template>
<script>
import Source from "./Source.vue";
export default {
  components: {
    Source
  }
};
</script>
