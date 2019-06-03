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
        <a @click="jump(paper)">{{paper.paperName}}</a>
      </div>
      <div class="searchpapercontent">{{paper.abstract}}</div>
      <div name="searchpaperauthor">
        <p style="color:black;font-size:12px">
          <a style="color:black">{{paper.author}}</a>
        </p>
      </div>
      <!--div style="margin-top:5px;margin-bottom:5px">
        <sui-button icon="star outline" size="mini" style="margin-right:5px" circular>收藏</sui-button>
        <sui-button icon="linkify" size="mini" style="margin-right:5px" circular>引用</sui-button>
        <sui-button icon="share" size="mini" style="margin-right:5px" circular>分享</sui-button>
      </div-->
      <Divider style="margin-bottom:0px"/>
    </Card>
  </Row>
</template>
<script>
export default {
  name: "CollectionPaperBox",
  data() {
    return {};
  },
  methods: {
    jump: function(paper){
      //this.$Message.info("Yes!!!!");
      if(this.$route.params.userID){
        //console.log("yes");
        //console.log(paper.resourceID);
        this.$router.push({name:'Upaperview',params:{resourceID:paper.resourceID}});
      }
      else{
        //console.log("yes");
        //console.log(paper.resourceID);
        this.$router.push({name:'paperview',params:{resourceID:paper.resourceID}});
      }
    }
  },
  props: ["paper"]
};
</script>
