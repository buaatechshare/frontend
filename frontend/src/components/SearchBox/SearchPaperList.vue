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
    <searchpaper v-for="(paper, index) in papers" v-bind:paper="paper" :key="index"></searchpaper>
    <div style="text-align:center">
      <Page
        :total="pageTotal"
        :current="pageNum"
        :page-size="pageSize"
        @on-change="handlePage"
        show-elevator
      />
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
      keywords: "",
      papers: [],
      pageTotal: 100,
      pageNum: 1,
      pageSize: 0
    };
  },
  methods: {
    handlePage(value) {
      this.pageNum = value;
      this.getPaperMessages();
      console.log(this.pageNum);
    },
    getPaperMessages() {
      this.keywords = this.$route.query.keywords;
      axios
        .get("/search/papers/", {
          params: {
            keywords: this.keywords,
            byTime: false,
            page:this.pageNum
          }
        })
        .then(res => {
          this.papers = res.data.results;
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    this.keywords = this.$route.query.keywords;
    axios
      .get("/search/papers/", {
        params: {
          keywords: this.keywords,
          byTime: false,
          page:this.pageNum
        }
      })
      .then(res => {
        this.papers = res.data.results;
      })
      .catch(err => {
        console.error(err);
      });
  },
  watch: {
    $route: "getPaperMessages"
  }
};
</script>
