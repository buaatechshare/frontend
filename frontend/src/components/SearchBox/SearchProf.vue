<style>
.profpic {
  border-radius: 50%;
  width: 100px;
  border: 1px solid #ffffff;
  margin-right: 20px;
}
.profinfo {
  float: left;
  margin-top: 10px;
  margin-bottom: 12px;
}
.searchproftitle {
  font-size: 20px;
  margin-bottom: 10px;
}
.searchprofcontent {
  font-size: 13px;
  color: grey;
  margin-bottom: 10px;
  width: 700px;
}
</style>
<template>
  <Card dis-hover style="border:0px">
    <div style="float:left">
      <img class="profpic" src="../../assets/profpic.jpg">
    </div>
    <div class="profinfo">
      <div class="searchproftitle">
        <a @click="jump()">{{professor.name}}</a>
      </div>
      <div class="searchprofcontent">{{professor.constitution}}</div>
      <div style="color: black;font-size: 12px; margin-bottom=12px">
        论文:
        <a style="color:black" v-for="(paper, index) in professor.papers" :key="index">{{paper}}</a>
      </div>
    </div>
    <div style="float:right;margin-top:20px">
      <sui-button basic content="关注" icon="bell outline"/>
    </div>
    <Divider style="margin-bottom:0px"/>
  </Card>
</template>
<script>
export default {
  name: "searchProf",
  props: ["professor"],
  methods: {
    jump: function() {
      if (this.$route.params.userID) {
        this.$router.push({
          name: "Uprofview",
          params: { userID: this.professor.userID }
        });
      } else {
        this.$router.push({
          name: "profview",
          params: { userID: this.professor.userID }
        });
      }
    }
  }
};
</script>
