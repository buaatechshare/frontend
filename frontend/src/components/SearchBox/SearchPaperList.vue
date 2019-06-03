<style>
.searchnum {
  color: grey;
  margin-left: 16px;
  margin-top: 10px;
}
</style>
<template>
  <div>
    <!-- <div class="searchnum">找到63条相关结果</div> -->
    <searchpaper v-for="(paper, index) in papers" v-bind:paper="paper" :key="index"></searchpaper>
    <div style="text-align:center">
      <Page :total="100" show-elevator/>
    </div>
  </div>
</template>
<script>
import searchpaper from "./SearchPaper.vue";
import axios from "axios";
export default {
  components: {
    searchpaper
  },
  data() {
    return {
      //keywords: "",
      papers: []
    };
  },
  inject: ["keywords"],
  created() {
    console.log(this.keywords);
    axios
      .get("/search/papers/", {
        params: {
          keywords: this.keywords,
          byTime: false
        }
      })
      .then(res => {
        console.log(res);
        this.papers = res.data.results;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
