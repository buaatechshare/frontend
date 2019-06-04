<style>
.searchnum {
  color: grey;
  margin-left: 16px;
  margin-top: 10px;
}
</style>
<template>
  <div>
    <div class="searchnum">找到{{this.count}}条相关结果</div>
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
      pageSize: 0,
      count: 0
    };
  },
  methods: {
    handlePage(value) {
      this.pageNum = value;
      this.getProfMessages();
    },
    getProfMessages() {
      this.keywords = this.$route.query.keywords;
      axios
        .get("/search/professors/", {
          params: {
            keywords: this.keywords,
            page: this.pageNum
          }
        })
        .then(res => {
          console.log(res);
          this.professors = res.data.results;
          this.count = res.data.count;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    this.keywords = this.$route.query.keywords;
    axios
      .get("/search/professors/", {
        params: {
          keywords: this.keywords,
          page: this.pageNum
        }
      })
      .then(res => {
        console.log(res);
        this.professors = res.data.results;
        this.count = res.data.count;
      })
      .catch(err => {
        console.error(err);
      });
  },
  watch: {
    $route: "getProfMessages"
  }
};
</script>
