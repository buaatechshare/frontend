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
    <searchpatent v-for="(patent, index) in patents" v-bind:patent="patent" :key="index"></searchpatent>
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
import searchpatent from "./SearchPatent.vue";
import axios from "axios";
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
      pageSize: 0,
      count: 0
    };
  },
  methods: {
    handlePage(value) {
      this.pageNum = value;
      this.getPatentMessages();
      console.log(this.pageNum);
    },
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
          this.count = res.data.count;
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    console.log(this);
    this.keywords = this.$route.query.keywords;
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
        this.count = res.data.count;
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
