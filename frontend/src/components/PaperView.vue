<style>
.paperlabel {
  color: grey;
  font-size: 14px;
  float: left;
  width: 100px;
}
.papercontent {
  color: grey;
  font-size: 14px;
  float: left;
  width: 800px;
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
        <h2 style="color:#006ddb" is="sui-header">{{paperdetail.title}}</h2>
        <!--来源 收藏 阅读量-->
        <div style="color:grey;font-size:16px">
          <div
            style="float:left"
            v-if="paperdetail.venue !== undefined"
          >{{paperdetail.venue}}-{{paperdetail.volume}}</div>
          <Divider type="vertical"/>
          <Icon v-if="iscollect==false" type="ios-heart-outline" size="22" @click="collectpaper"/>
          <Icon
            v-if="iscollect==true"
            type="ios-heart"
            size="22"
            style="color:#c60000"
            @click="collectpaper"
          />收藏
        </div>
        <br>
        <!--作者-->
        <div>
          <p class="paperlabel">作者：</p>
          <p style="color:grey;font-size:14px;float:left">
            <!-- authors->author->author.name -->
            <span v-for="author in authors" style="margin-right:5px">
              <a>{{author.name}}</a>
              <Divider type="vertical"/>
            </span>
          </p>
        </div>

        <div style="clear:both"></div>
        <!--摘要-->
        <div>
          <p class="paperlabel">摘要：</p>
          <p class="papercontent">{{paperdetail.abstract}}</p>
          <br>
          <!--为了上下间距美观加入换行-->
        </div>

        <div style="clear:both"></div>
        <!--关键词-->
        <div>
          <p class="paperlabel">关键词：</p>
          <p class="papercontent">
            <span v-for="keyword in keywords" style="margin-right:5px">
              <a>{{keyword}}</a>
              <Divider type="vertical"/>
            </span>
          </p>
        </div>
        <div style="clear:both"></div>
        <!--field-->
        <div>
          <p class="paperlabel">学习领域：</p>
          <p class="papercontent">
            <span v-for="field in fos" style="margin-right:10px">
              {{field}}
              <Divider type="vertical"/>
            </span>
          </p>
        </div>
        <div style="clear:both"></div>
        <!--DOI-->
        <div>
          <p class="paperlabel">DOI：</p>
          <p class="papercontent">{{paperdetail.doi}}</p>
        </div>
        <div style="clear:both"></div>

        <!--year-->
        <div>
          <p class="paperlabel">出版年份：</p>
          <p class="papercontent">{{paperdetail.year}}</p>
        </div>

        <div style="clear:both"></div>
        <!--被引量-->
        <div>
          <p class="paperlabel">被引量：</p>
          <p class="papercontent">{{paperdetail.n_citation}}</p>
        </div>
        <div style="clear:both"></div>
        <!--引用-->
        <div>
          <div class="paperlabel">引用：</div>
          <div class="papercontent">
            <div v-for="reference in references">{{reference}}</div>
          </div>
        </div>
        <div style="clear:both"></div>
        <p></p>
        <!--出版-->
        <div>
          <p class="paperlabel">出版社：</p>
          <p class="papercontent">{{paperdetail.publisher}}</p>
        </div>
        <div style="clear:both"></div>

        <sui-divider hidden/>
        <!--下载链接-->
        <div style="width:865px">
          <Card dis-hover>
            <p slot="title" style="font-size:17px">全文下载</p>
            <p v-for="download in url">{{download}}</p>
          </Card>
        </div>

        <sui-divider hidden/>

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
  name: "paperview",
  data() {
    return {
      value: 0,
      open: false,
      iscollect: false,
      paperdetail: [],
      authors: [],
      keywords: [],
      fos: [],
      references: [],
      url: [],
      comments: [],
      resourceID: this.$route.query.resourceID,
      starRate: 0,
      addCollectionModel:{
        userID: this.$route.params.userID,
        resourceID: this.$route.query.resourceID
      },
      commentModel: {
        content: "",
        rate: "",
        userID: this.$route.params.userID,
        resourceID: this.$route.query.resourceID
      }
    };
  },
  methods: {
    submit() {
      if (this.commentModel.rate == 0 && this.commentModel.content == "") {
        this.$Message.info("评论不能为空！");
        return;
      }
      this.commentModel.rate = this.starRate.toString();
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
    collectpaper() {
      if (this.$route.params.userID == null) {
        this.$Message.info("请先登录");
        return;
      }
      this.iscollect = !this.iscollect;
      if (this.iscollect) {
        axios.post("/collections/", this.addCollectionModel);
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
        axios.get("/paperDetail/" + this.$route.query.resourceID + "/"),
        axios.get("/comment/", {
          params: { resourceID: this.$route.query.resourceID }
        })
      ])
      .then(
        axios.spread((PD, CO) => {
          this.paperdetail = PD.data;
          console.log(PD.data);
          console.log(CO);
          this.authors = this.paperdetail.authors;
          this.keywords = this.paperdetail.keywords;
          this.fos = this.paperdetail.fos;
          this.references = this.paperdetail.references;
          this.url = this.paperdetail.url;
          this.comments = CO.data.results;
        })
      );
  }
};
</script>
