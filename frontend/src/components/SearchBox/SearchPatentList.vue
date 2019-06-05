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
    <searchpatent v-for="(patent, index) in patents" v-bind:patent="patent" :key="index"></searchpatent>
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
import searchpatent from "./SearchPatent.vue";
import axios from "axios";
import Vue from "vue";
export default {
  components: {
    searchpatent
  },
  data() {
    return {
      keywords: "",
      patents: [],
      pageTotal: 100,
      pageNum: 1,
      pageSize: 10,
      resultcounts: [0]
    };
  },
  methods: {
    handlePage(value) {
      this.pageNum = value;
      this.getPatentMessages();
    },
    //翻页
    getPatentMessages() {
      this.keywords = this.$route.query.keywords;
      axios
        .get("/search/patents/", {
          params: {
            keywords: this.keywords,
            byTime: false,
            page: this.pageNum
          }
        })
        .then(res => {
          this.patents = res.data.results;
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
        .get("/search/patents/", {
          params: {
            keywords: this.keywords,
            byTime: false,
            page: this.pageNum
          }
        })
        .then(res => {
          Vue.set(this.resultcounts, 0, res.data.count);
          this.patents = res.data.results;
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
      .get("/search/patents/", {
        params: {
          keywords: this.keywords,
          byTime: false,
          page: 1
        }
      })
      .then(res => {
        Vue.set(this.resultcounts, 0, res.data.count);
        console.log(res);
        this.patents = res.data.results;
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
