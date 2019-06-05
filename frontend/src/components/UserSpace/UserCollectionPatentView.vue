<template>
  <div>
    <CollectionPatentBox v-for="(patent, index) in patents" v-bind:patent="patent" :key="index"/>
    <Page :total="100" show-elevator style="margin-bottom:100px"/>
  </div>
</template>

<script>
import CollectionPatentBox from "./CollectionPatentBox";
import axios from "axios";
export default {
  name: "patentBoxList",
  components: {
    CollectionPatentBox
  },
  data() {
    return {
      patents: []
    };
  },
  beforeCreate() {
    axios
      .get("/collections/"+this.$route.params.userID+"/",{params:{resType:"patent"}})
      .then(res => {
        console.log("patent");
        console.log(res);
        this.patents = res.data.results;
        //console.log(this.papers);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>