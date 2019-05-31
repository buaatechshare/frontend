<template>
  <div>
    <ProfBox v-for="(prof, index) in follows" v-bind:prof="prof" :key="index"/>
    <Page :total="100" show-elevator style="margin-bottom:100px"/>
  </div>
</template>

<script>
import ProfBox from "../BOX/ProfBox";
import axios from "axios";
export default {
  name: "UserFollowView",
  components: {
    ProfBox
  },
  data() {
    return {
      follows: []
    };
  },
  beforeCreate() {
    axios
      .get("/follow/{}",{
        params:{
          'userID':123
        }
      })
      .then(res => {
        this.follows = res.data.follows;
        console.log(this.follows);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>