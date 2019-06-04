<style>
.searchpatenttitle {
  font-size: 20px;
  margin-bottom: 10px;
}
.searchpatentcontent {
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
      <div class="searchpatenttitle">
        <a @click="jump(patent)">{{patent._source.TI}}</a>
      </div>
      <div class="searchpatentcontent">{{patent._source.AB}}</div>
      <div name="searchpatentauthor">
        <div style="color: black;font-size: 12px;">
          所有人:
          <a style="color:black">{{patent._source.FI}}</a>
        </div>
      </div>
      <Divider style="margin-bottom:0px"/>
    </Card>
  </Row>
</template>
<script>
export default {
  name: "searchPatent",
  props: ["patent"],
  methods: {
    jump: function(patent) {
      if (this.$route.params.userID) {
        this.$router.push({
          name: "Upatentview",
          query: { resourceID: patent._id }
        });
      } else {
        this.$router.push({
          name: "patentview",
          query: { resourceID: patent._id }
        });
      }
    }
  }
};
</script>
