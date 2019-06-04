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
        <a>{{paper.paperName}}</a>
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
      <div style="margin-top:5px;margin-bottom:5px">
        <sui-button size="mini" style="margin-right:5px" @click="handleRender(paper)" circular>删除</sui-button>
      </div>
      <Divider style="margin-bottom:0px"/>
    </Card>
  </Row>
</template>
<script>
import axios from "axios";
export default {
  name: "myPaperBox",
  data() {
    return {};
  },
  methods: {
    handleRender: function(paper) {
        axios
        .delete('myPaper/{}',{
                params:{
                    'userID':this.$route.params.userID
                    }
                },
                this.paper.resourceID)
                .then(res=> {
                    if(res.status == 200){
                        console.log("deleted successfully.");
                        this.$route.go(0);
                    }
                })
    }
  },
  props: ["paper"]
};
</script>
