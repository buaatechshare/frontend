<template>
  <div>
    <myPaperBox v-for="(paper, index) in papers" v-bind:paper="paper" :key="index"/>
    <Page :total="100" show-elevator style="margin-bottom:100px"/>
  </div>
</template>

<script>
import myPaperBox from "./myPaperBox";
import axios from "axios";
export default {
  name: "paperBoxList",
  components: {
    myPaperBox
  },
  data() {
    return {
      papers: []
    };
  },
  beforeCreate() {
    axios
      .get("/papers")
      .then(res => {
        this.papers = res.data.papers;
        console.log(this.papers);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>