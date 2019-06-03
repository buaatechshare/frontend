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
    <searchprof v-for="(professor, index) in professors" v-bind:professor="professor" :key="index"></searchprof>
    <!--未和后端数据对接版本-->
    <div style="text-align:center">
      <Page :total="100" show-elevator/>
    </div>
  </div>
</template>
<script>
import searchprof from "./SearchProf.vue";
import axios from "axios";
export default {
  components: {
    searchprof
  },
  data() {
    return {
      keywords: "",
      professors: []
    };
  },
  created() {
    this.keywords = this.$route.params.keywords;
    axios
      .get("/search/professors", {
        params: {
          keywords: this.keywords
        }
      })
      .then(res => {
        console.log(res);
        this.professors = res.data.professor;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
