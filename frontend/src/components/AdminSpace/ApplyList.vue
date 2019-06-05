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
        .get("/application/", {
          params: {
            pageSize: 10,
            page: this.pageNum
          }
        })
        .then(res => {
          console.log(res);
          this.applyModels=res.data.results;
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
  created() {
    axios
      .get("/application/", {
        params: {
          page: 1,
          pageSize: 10
        }
      })
      .then(res => {
        console.log(res);
        this.applyModels=res.data.results;
        console.log(this.applyModels);
        this.pageTotal=res.data.count;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
