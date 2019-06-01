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
      .get("/patents")
      .then(res => {
        this.patents = res.data.patents;
        console.log(this.patents);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>