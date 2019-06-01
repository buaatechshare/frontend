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
}
.searchproftitle {
  font-size: 20px;
  margin-bottom: 10px;
}
.searchprofcontent {
  font-size: 13px;
  color: grey;
  margin-bottom: 10px;
}
</style>
<template>
  <Card dis-hover style="border:0px">
    <div style="float:left">
      <img class="profpic" src="../../assets/profavatar.jpg">
    </div>
    <div class="profinfo">
      <div class="searchproftitle">
        <a style="color:black"> {{prof.name}} </a>
      </div>
      <div class="searchprofcontent">{{prof.constitution}}</div>
      <div style="color: black;font-size: 12px;">
        研究领域:
        <a style="color:black"> {{prof.field}} </a>
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
  name: "profBox",
  data() {
    return {};
  },
  props: ["prof"]
};
</script>
