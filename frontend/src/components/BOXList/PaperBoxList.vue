<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <sui-card-group :items-per-row="2">
      <PaperBox v-for="(paper, index) in papers" v-bind:paper="paper" :key="index"/>
    </sui-card-group>
    <div class="ui horizontal divider"></div>
    <Page :total="100" show-elevator style="margin-bottom:100px"/>
  </div>
</template>

<script>
import PaperBox from "../BOX/PaperBox";
import axios from "axios";
export default {
  name: "paperBoxList",
  components: {
    PaperBox
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