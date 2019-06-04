<style>
</style>
<template>
  <div>
    <Apply v-for="(applyModel, index) in applyModels" v-bind:applyModel="applyModel" :key="index"></Apply>
    <div style="text-align:center">
      <Page :total="pageTotal"
        :current="pageNum"
        :page-size="pageSize"
        @on-change="handlePage" show-elevator/>
    </div>
  </div>
</template>
<script>
import Apply from "./Apply.vue";
import axios from "axios";
export default {
  components: {
    Apply
  },
  data() {
    return {
      applyModels:[],
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
    getPaperMessages() {
      this.keywords = this.$route.query.keywords;
      axios
        .get("/paperCheck/", {
          params: {
            pageSize: 10,
            page: this.pageNum
          }
        })
        .then(res => {
          this.applyModel=res.data.results;
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  created() {
    axios
      .get("/paperCheck/", {
        params: {
          page: 1,
          pageSize: 10
        }
      })
      .then(res => {
        this.applyModel=res.data.results;
        this.pageTotal=res.data.count;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
