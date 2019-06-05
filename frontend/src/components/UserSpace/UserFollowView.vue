<template>
  <div>
    <ProfBox v-for="(prof, index) in follows" v-bind:prof="prof" :key="index"/>
    <!--Page :total="100" show-elevator style="margin-bottom:100px"/-->
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
      .get("/follow/"+this.$route.params.userID+"/")
      .then(res => {
        this.follows = res.data.results;
        console.log(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>