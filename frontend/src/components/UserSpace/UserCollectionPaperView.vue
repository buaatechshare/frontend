<template>
  <div>
    <CollectionPaperBox v-for="(paper, index) in papers" v-bind:paper="paper" :key="index"/>
    <Page :total="100" show-elevator style="margin-bottom:100px"/>
  </div>
</template>

<script>
import CollectionPaperBox from "./CollectionPaperBox";
import axios from "axios";
export default {
  name: "paperBoxList",
  components: {
    CollectionPaperBox
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