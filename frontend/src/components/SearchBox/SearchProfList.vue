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
    <searchprof v-for="(professor, index) in professors" v-bind:professor="professor" :key="index"></searchprof>
    <!--未和后端数据对接版本-->
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
import searchprof from "./SearchProf.vue";
import axios from "axios";
import Vue from "vue";
export default {
  components: {
    searchprof
  },
  data() {
    return {
      keywords: "",
      professors: [],
      pageTotal: 100,
      pageNum: 1,
      pageSize: 10,
      resultcounts: [0]
    };
  },
  methods: {
    handlePage(value) {
      this.pageNum = value;
      this.getProfMessages();
    },
    //翻页
    getProfMessages() {
      this.keywords = this.$route.query.keywords;
      axios
        .get("/search/professors/", {
          params: {
            keywords: this.keywords,
            byTime: false,
            page: this.pageNum
          }
        })
        .then(res => {
          this.professors = res.data.results;
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
        .get("/search/professors/", {
          params: {
            keywords: this.keywords,
            byTime: false,
            page: 1
          }
        })
        .then(res => {
          Vue.set(this.resultcounts, 0, res.data.count);
          this.professors = res.data.professor;
          this.pageTotal=res.data.count;
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
      .get("/search/professors/", {
        params: {
          keywords: this.keywords,
          byTime: false,
          page: 1
        }
      })
      .then(res => {
        Vue.set(this.resultcounts, 0, res.data.count);
        console.log(res);
        this.professors = res.data.professor;
        this.pageTotal=res.data.count;
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
