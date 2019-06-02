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
        <h2 style="color:#006ddb" is="sui-header">{{patentdetail.title}}</h2>
        <!--来源 收藏 阅读量-->
        <p style="color:grey;font-size:16px">
          <Icon v-if="iscollect==false" type="ios-heart-outline" size="22" @click="collectpaper"/>
          <Icon
            v-if="iscollect==true"
            type="ios-heart"
            size="22"
            style="color:#c60000"
            @click="collectpaper"
          />收藏
        </p>
        <!--专利信息-->
        <sui-table-row>
          <sui-table-cell class="tablelabel">申请号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.applicationNo}}</sui-table-cell>
          <sui-table-cell class="tablelabel">申请日：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.applicationDate}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">公开号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.publicNo}}</sui-table-cell>
          <sui-table-cell class="tablelabel">公开日：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.publicDate}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">授权公开号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.grantNo}}</sui-table-cell>
          <sui-table-cell class="tablelabel">授权公开日：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.grantDate}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">申请人：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.appliers}}</sui-table-cell>
          <sui-table-cell class="tablelabel">申请地：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.address}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">发明人：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.inventors}}</sui-table-cell>
          <sui-table-cell class="tablelabel">当前权利人：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.obligee}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">专利代理机构：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.agency}}</sui-table-cell>
          <sui-table-cell class="tablelabel">代理人：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.agent}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">主分类号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.mainClassification}}</sui-table-cell>
          <sui-table-cell class="tablelabel">分类号：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.classificationNo}}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">优先权：</sui-table-cell>
          <sui-table-cell class="tablecontent">{{patentdetail.priority}}</sui-table-cell>
        </sui-table-row>
        <Divider dashed/>
        <div style="clear:both"></div>
        <!--摘要-->
        <div>
          <p class="label">摘要：</p>
          <p class="papercontent">{{patentdetail.abstract}}</p>
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
              <a is="sui-comment-author" style="pointer-events:none">{{comment.name}}</a>
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
                <Rate v-model="commentModel.rate"/>
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
      appliers: [],
      classificationNo: [],
      commentModel: {
        comment: "",
        rate: 0,
        userID: this.$route.params.userID,
        resourceID: "12333"
      }
    };
  },
  methods: {
    submit() {
      if (this.commentModel.rate == 0 && this.commentModel.comment == "") {
        this.$Message.info("评论不能为空！");
        return;
      }
      axios.post("/comment", this.commentModel).then(res => {
        if (res.status == 200) {
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
    collectpaper() {
      this.iscollect = !this.iscollect;
      if (this.iscollect) {
        axios.post("/collections/{}", {
          params: {
            userID: this.$route.params.userID
          },
          data: {
            userID: this.$route.params.userID,
            resourceID: "12333"
          }
        });
      } else {
        axios.delete("/collections/{}", {
          params: {
            userID: this.$route.params.userID
          },
          data: {
            userID: this.$route.params.userID,
            resourceID: "12333"
          }
        });
      }
    }
  },
  components: {},
  created() {
    axios
      .all([
        axios.get("/patentDetail/{}", { params: { resourceID: 111 } }),
        axios.get("/comment", { params: { resourceID: 111 } })
      ])
      .then(
        axios.spread((PD, CO) => {
          console.log(PD);
          this.patentdetail = PD.data;
          this.keywords = this.patentdetail.keywords;
          this.appliers = this.patentdetail.appliers;
          this.classificationNo = this.patentdetail.classificationNo;
          this.comments = CO.data.comments;
        })
      );
  }
};
</script>
