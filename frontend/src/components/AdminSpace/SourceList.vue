<style>
</style>
<template>
  <div>
    <Source v-for="(sourceModel, index) in sourceModels" v-bind:sourceModel="sourceModel" :key="index"></Source>
    <div style="text-align:center">
      <Page :total="pageTotal"
        :current="pageNum"
        :page-size="pageSize"
        @on-change="handlePage" show-elevator/>
    </div>
  </div>
</template>
<script>
import Source from "./Source.vue";
import axios from "axios";
export default {
  components: {
    Source
  },
  data() {
    return {
      sourceModels:[],
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
          this.sourceModels=res.data.results;
          console.log(res);
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
        console.log(res);
        this.sourceModels=res.data.results;
        this.pageTotal=res.data.count;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
