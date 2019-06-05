<style>
.searchpapertitle {
  font-size: 20px;
  margin-bottom: 10px;
}
.searchpapercontent {
  font-size: 13px;
  color: grey;
  margin-bottom: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-break: break-all;
}
</style>
<template>
  <Row>
    <Card dis-hover style="border:0px">
      <div class="searchpapertitle">
        <a @click="jump(applyModel)">{{applyModel.realName}}</a>
      </div>
      <div class="searchpapercontent">{{applyModel.introduction}}</div>
      <div name="searchpaperauthor">
        <p style="color:black;font-size:12px">{{applyModel.constitution}}</p>
      </div>
      <Divider style="margin-bottom:0px"/>
    </Card>
  </Row>
</template>
<script>
export default {
  name: "searchapplyModel",
  data() {
    return {};
  },
  props: ["applyModel"],
  methods: {
    jump: function() {
      this.$router.push({
        name: "adminapplyview",
        query: { apply: this.applyModel }
      });
    }
  }
};
</script>
