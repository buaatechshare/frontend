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
    console.log("what?");
    axios
      .get("/collections/"+this.$route.params.userID+"/",{params:{resType:"paper"}})
      .then(res => {
        console.log(res.data.results);
        this.papers = res.data.results;
        //console.log(this.papers);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>