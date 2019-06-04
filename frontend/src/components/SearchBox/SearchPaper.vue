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
        <a @click="jump(paper)">{{paper.title}}</a>
      </div>
      <div class="searchpapercontent">{{paper.abstract}}</div>
      <div name="searchpaperauthor">
        <p style="color:black;font-size:12px">
          <a style="color:black" v-for="(author, index) in paper.authors">{{author.name+" "}}</a>
        </p>
      </div>
      <Divider style="margin-bottom:0px"/>
    </Card>
  </Row>
</template>
<script>
export default {
  name: "searchPaper",
  data() {
    return {};
  },
  props: ["paper"],
  methods: {
    jump: function() {
      if (this.$route.params.userID) {
        this.$router.push({
          name: "Upaperview",
          query: { resourceID: this.paper.id }
        });
      } else {
        this.$router.push({
          name: "paperview",
          query: { resourceID: this.paper.id }
        });
      }
    }
  }
};
</script>
