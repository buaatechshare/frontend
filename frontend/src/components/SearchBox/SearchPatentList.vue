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
    <searchpatent v-for="(patent, index) in patents" v-bind:patent="patent" :key="index"></searchpatent>
    <!--未和后端数据对接版本-->
    <div style="text-align:center">
      <Page :total="100" show-elevator/>
    </div>
  </div>
</template>
<script>
import searchpatent from "./SearchPatent.vue";
import axios from "axios";
export default {
  components: {
    searchpatent
  },
  data() {
    return {
      keywords: "",
      patents: []
    };
  },
  created() {
    this.keywords = this.$route.query.keywords;
    console.log(this);
    axios
      .get("/search/patents/", {
        params: {
          keywords: this.keywords,
          byTime: false
        }
      })
      .then(res => {
        console.log(res);
        this.patents = res.data.results;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
