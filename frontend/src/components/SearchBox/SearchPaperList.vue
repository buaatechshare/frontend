<style>
.searchnum {
  color: grey;
  margin-left: 16px;
  margin-top: 10px;
}
</style>
<template>
  <div>
    <div v-for="resultcount in resultcounts" class="searchnum">找到{{resultcount}}条相关结果</div>
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
import Vue from "vue";
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
      pageSize: 10,
      resultcounts: [0]
    };
  },
  methods: {
    handlePage(value) {
      this.pageNum = value;
      this.getPaperMessages();
    },
    //翻页
    getPaperMessages() {
      this.keywords = this.$route.query.keywords;
      axios
        .get("/search/papers/", {
          params: {
            keywords: this.keywords,
            byTime: false,
            page: this.pageNum
          }
        })
        .then(res => {
          this.papers = res.data.results;
          this.count = res.data.count;
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    //多次搜索
    newask() {
      this.keywords = this.$route.query.keywords;
      axios
        .get("/search/papers/", {
          params: {
            keywords: this.keywords,
            byTime: false,
            page: 1
          }
        })
        .then(res => {
          Vue.set(this.resultcounts, 0, res.data.count);
          this.papers = res.data.results;
          this.pageTotal = res.data.count;
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  //初次搜索
  created() {
    this.keywords = this.$route.query.keywords;
    axios
      .get("/search/papers/", {
        params: {
          keywords: this.keywords,
          byTime: false,
          page: 1
        }
      })
      .then(res => {
        Vue.set(this.resultcounts, 0, res.data.count);
        console.log(res);
        this.papers = res.data.results;
        this.pageTotal = res.data.count;
      })
      .catch(err => {
        console.error(err);
      });
  },
  watch: {
    $route: "newask"
  }
};
</script>
