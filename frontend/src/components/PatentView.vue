<style>
.label {
  color: grey;
  font-size: 14px;
  float: left;
  width: 100px;
}
.tablelabel {
  color: grey;
  font-size: 13px;
  width: 100px;
}
.papercontent {
  color: grey;
  font-size: 14px;
  float: left;
  width: 800px;
}
.tablecontent {
  color: grey;
  font-size: 13px;
  width: 350px;
}
.comment {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
}
</style>
<template>
  <div id="index">
    <div style="margin-left:200px;margin-right:200px">
      <sui-container fluid>
        <br>
        <!--标题-->
        <h2 style="color:#006ddb" is="sui-header">{{patentdetail.TI}}</h2>
        <!--来源 收藏 阅读量-->
        <p style="color:grey;font-size:16px">
          <Icon v-if="iscollect==false" type="ios-heart-outline" size="22" @click="collectpatent"/>
          <Icon
            v-if="iscollect==true"
            type="ios-heart"
            size="22"
            style="color:#c60000"
            @click="collectpatent"
          />收藏
        </p>
        <!--专利信息-->
        <sui-table-row>
          <sui-table-cell class="tablelabel">申请号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.AN}}</sui-table-cell>
          <sui-table-cell class="tablelabel">申请日：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.AD}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">公开号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.PN}}</sui-table-cell>
          <sui-table-cell class="tablelabel">公开日：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.PD}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">授权公开号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.GN}}</sui-table-cell>
          <sui-table-cell class="tablelabel">授权公开日：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.GD}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">申请人：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.PA}}</sui-table-cell>
          <sui-table-cell class="tablelabel">申请地：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.DZ}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">发明人：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.IN}}</sui-table-cell>
          <sui-table-cell class="tablelabel">当前权利人：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.PE}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">专利代理机构：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.AGN}}</sui-table-cell>
          <sui-table-cell class="tablelabel">代理人：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.AT}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">主分类号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.MC}}</sui-table-cell>
          <sui-table-cell class="tablelabel">分类号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.IC}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">优先权：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.PR}}</sui-table-cell>
        </sui-table-row>
        <Divider dashed/>
        <div style="clear:both"></div>
        <!--摘要-->
        <div>
          <p class="label">摘要：</p>
          <p class="papercontent">{{patentdetail.AB}}</p>
          <br>
          <!--为了上下间距美观加入换行-->
        </div>

        <div style="clear:both"></div>
        <!--关键词-->
        <div>
          <p class="label">关键词：</p>
          <p class="papercontent">
            <span v-for="keyword in keywords" style="margin-right:5px">
              <a>{{keyword}}</a>
            </span>
          </p>
        </div>

        <div style="clear:both"></div>

        <!--评论列表-->
        <sui-comment-group style="width:865px">
          <h3 is="sui-header" style="width:865px" dividing>评论列表</h3>
          <sui-comment v-for="comment in comments" :key="index">
            <sui-comment-content>
              <a is="sui-comment-author" style="pointer-events:none">{{comment.userID.name}}</a>
              <sui-comment-metadata>
                <Rate disabled="true" v-model="comment.rate"/>
              </sui-comment-metadata>
              <sui-comment-text>{{comment.content}}</sui-comment-text>
            </sui-comment-content>
          </sui-comment>
        </sui-comment-group>
        <!--评论按钮-->
        <div style="width:865px;text-align:right">
          <sui-button
            content="发表评论"
            label-position="left"
            icon="edit"
            style="background-color:#cae4ff;color:#2693ff;margin:0px 5px"
            @click.native="toggle"
          />
        </div>
        <!--评分评价-->
        <sui-modal v-model="open">
          <sui-modal-header>请写下你的评价</sui-modal-header>
          <sui-modal-content>
            <Form style="width:865px" label-width="40px">
              <div style="margin-bottom:10px">
                <sui-icon name="bell outline"/>评分
              </div>
              <FormItem style="margin-bottom:10px">
                <Rate v-model="starRate"/>
              </FormItem>
              <div style="margin-bottom:10px">
                <sui-icon name="edit outline"/>评论
              </div>
              <FormItem>
                <Input
                  v-model="commentModel.content"
                  style="width:835px"
                  type="textarea"
                  :rows="3"
                  :autosize="{maxRows: 3,minRows: 3}"
                  placeholder="请输入你的评价..."
                />
              </FormItem>
            </Form>
          </sui-modal-content>
          <sui-modal-actions>
            <sui-button positive @click="submit">发表评论</sui-button>
          </sui-modal-actions>
        </sui-modal>
      </sui-container>
    </div>
    <!--底端留白美观-->
    <div>
      <sui-divider hidden/>
      <sui-divider hidden/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "patentview",
  data() {
    return {
      value: 0,
      open: false,
      iscollect: false,
      patentdetail: [],
      comments: [],
      resourceID:this.$route.query.resourceID,
      starRate:0,
      commentModel: {
        content: "",
        rate: "",
        userID: this.$route.params.userID,
        resourceID: this.$route.query.resourceID
      },
      
    };
  },
  methods: {
    submit() {
      if (this.commentModel.rate == 0 && this.commentModel.content == "") {
        this.$Message.info("评论不能为空！");
        return;
      }
      this.commentModel.rate=this.starRate.toString();
      console.log(this.commentModel);
      axios.post("/comment/", this.commentModel).then(res => {
        if (res.status == 201) {
          this.$Message.info("评论成功！");
          this.open = !this.open;
        } else {
          this.$Message.info("评论失败！");
        }
      });
    },
    toggle() {
      this.open = !this.open;
    },
    collectpatent() {
      this.iscollect = !this.iscollect;
      if (this.iscollect) {
        axios.post("/collections/", {
          params: {
            userID: this.$route.params.userID
          },
          data: {
            userID: this.$route.params.userID,
            resourceID: this.resourceID
          }
        });
      } else {
        axios.delete("/collections/", {
          params: {
            userID: this.$route.params.userID
          },
          data: {
            userID: this.$route.params.userID,
            resourceID: this.resourceID
          }
        });
      }
    }
  },
  components: {},
  created() {
    axios
      .all([
        axios.get("/patentDetail/"+ this.$route.query.resourceID + "/"),
        axios.get("/comment/", { params: { resourceID: this.$route.query.resourceID } })
      ])
      .then(
        axios.spread((PD, CO) => {
          console.log(PD);
          console.log(CO);
          this.patentdetail = PD.data;
          this.keywords = this.patentdetail.TX;
          this.comments = CO.data.results;
        })
      );
  }
};
</script>
