<style>
.searchnum {
  color: grey;
  margin-left: 16px;
  margin-top: 10px;
}
</style>
<template>
  <div>
    <div class="searchnum">找到63条相关结果</div>
    <searchpatent></searchpatent>
    <searchpatent></searchpatent>
    <searchpatent></searchpatent>
    <searchpatent></searchpatent>
    <searchpatent></searchpatent>
    <searchpatent></searchpatent>
    <!--未和后端数据对接版本-->
    <div style="text-align:center">
      <Page :total="100" show-elevator/>
    </div>
  </div>
</template>
<script>
import searchpatent from "./SearchPatent.vue";
export default {
  components: {
    searchpatent
  }
};
</script>
