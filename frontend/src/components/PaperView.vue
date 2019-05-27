<style>
.label {
  color: grey;
  font-size: 14px;
  float: left;
  width: 65px;
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
    <div style="margin-left:200px;margin-right:400px">
      <sui-container fluid>
        <br>
        <!--标题-->
        <h2 style="color:#006ddb" is="sui-header">慢性疲劳综合征的中医药研究概述</h2>
        <!--来源 收藏 阅读量-->
        <p style="color:grey;font-size:12px">
          来自 维普
          <Divider type="vertical"/>
          <sui-icon name="heart outline"/>收藏
          <Divider type="vertical" dashed/>阅读量 5
        </p>
        <!--作者-->
        <div>
          <p class="label">作者：</p>
          <p style="color:grey;font-size:14px;float:left">
            <span>
              <a>王开娜</a>
            </span>，
            <span>
              <a>李永峰</a>
            </span>，
            <span>
              <a>王静怡（指导）</a>
            </span>
            <!-- 单独放span用于加链接 -->
          </p>
        </div>

        <div style="clear:both"></div>
        <!--摘要-->
        <div>
          <p class="label">摘要：</p>
          <p
            class="papercontent"
          >通过对近年来有关慢性疲劳综合征文献的回顾，总结传统中医药对慢性疲劳综合征病因病机、辨证施治、针灸治疗、抗疲劳的单味中药研究概况。传统中医药近年来对慢性疲劳综合征的研究以整体观为指导同时针对个体特点，多从脏腑、气血津液论治，也可辨证施以针灸治疗，并通过实验研究总结出不少具有抗疲劳的单杀中药。</p>
          <br>
          <!--为了上下间距美观加入换行-->
        </div>

        <div style="clear:both"></div>
        <!--关键词-->
        <div>
          <p class="label">关键词：</p>
          <p class="papercontent">
            <span>
              <a>慢性疲劳综合征</a>
            </span>，
            <span>
              <a>中医药</a>
            </span>，
            <span>
              <a>辩证施治</a>
            </span>
          </p>
        </div>

        <div style="clear:both"></div>
        <!--DOI-->
        <div>
          <p class="label">DOI：</p>
          <p class="papercontent">10.3969/j.issn.1672-0571.2007.01.035</p>
        </div>

        <div style="clear:both"></div>
        <!--被引量-->
        <div>
          <p class="label">被引量：</p>
          <p class="papercontent">
            <a>12</a>
          </p>
        </div>
        <!--三个按钮-->
        <div style="clear:both"></div>
        <div style="margin-top:20px;margin-bottom:20px">
          <sui-button
            icon="star outline"
            style="background-color:#cae4ff;color:#2693ff;margin:0px 5px"
            @click="test"
            circular
          >收藏</sui-button>
          <sui-button
            icon="linkify"
            style="background-color:#cae4ff;color:#2693ff;margin:0px 5px"
            circular
          >引用</sui-button>
          <sui-button
            icon="share"
            style="background-color:#cae4ff;color:#2693ff;margin:0px 5px"
            circular
          >分享</sui-button>
        </div>
        <sui-divider hidden/>
        <!--选项卡-->
        <div style="width:865px">
          <sui-menu pointing>
            <a
              is="sui-menu-item"
              v-for="item in items"
              :active="isActive(item)"
              :key="item"
              :content="item"
              @click="select(item)"
            />
          </sui-menu>
          <sui-segment>
            <docs-wireframe name="paragraph"/>
          </sui-segment>
        </div>

        <sui-divider hidden/>

        <!--评论列表-->
        <sui-comment-group style="width:865px">
          <h3 is="sui-header" style="width:865px" dividing>评论列表</h3>

          <sui-comment>
            <sui-comment-avatar src="../assets/profpic.jpg"/>
            <sui-comment-content>
              <a is="sui-comment-author">Matt</a>
              <sui-comment-metadata>
                <div>Today at 5:42PM</div>
              </sui-comment-metadata>
              <sui-comment-text>How artistic!</sui-comment-text>
              <sui-comment-actions>
                <sui-comment-action>Reply</sui-comment-action>
              </sui-comment-actions>
            </sui-comment-content>
          </sui-comment>

          <sui-comment>
            <sui-comment-avatar src="../assets/profpic.jpg"/>
            <sui-comment-content>
              <a is="sui-comment-author">Elliot Fu</a>
              <sui-comment-metadata>
                <div>Yesterday at 12:30AM</div>
              </sui-comment-metadata>
              <sui-comment-text>
                <p>This has been very useful for my research. Thanks as well!</p>
              </sui-comment-text>
              <sui-comment-actions>
                <sui-comment-action>Reply</sui-comment-action>
              </sui-comment-actions>
            </sui-comment-content>
            <sui-comment-group>
              <sui-comment>
                <sui-comment-avatar src="static/images/avatar/small/jenny.jpg"/>
                <sui-comment-content>
                  <a is="sui-comment-author">Jenny Hess</a>
                  <sui-comment-metadata>
                    <div>Just now</div>
                  </sui-comment-metadata>
                  <sui-comment-text>Elliot you are always so right :)</sui-comment-text>
                  <sui-comment-actions>
                    <sui-comment-action>Reply</sui-comment-action>
                  </sui-comment-actions>
                </sui-comment-content>
              </sui-comment>
            </sui-comment-group>
          </sui-comment>

          <sui-comment>
            <sui-comment-avatar src="static/images/avatar/small/joe.jpg"/>
            <sui-comment-content>
              <a is="sui-comment-author">Joe Henderson</a>
              <sui-comment-metadata>
                <div>5 days ago</div>
              </sui-comment-metadata>
              <sui-comment-text>Dude, this is awesome. Thanks so much</sui-comment-text>
              <sui-comment-actions>
                <sui-comment-action>Reply</sui-comment-action>
              </sui-comment-actions>
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
                <Rate v-model="value"/>
              </FormItem>
              <div style="margin-bottom:10px">
                <sui-icon name="edit outline"/>评论
              </div>
              <FormItem>
                <Input
                  v-model="value6"
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
            <sui-button positive @click.native="toggle">发表评论</sui-button>
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
import defaultIndex from "../components/defaultIndex.vue";
import axios from "axios";
export default {
  name: "paperview",
  data() {
    return {
      active: "资料来源",
      items: ["资料来源", "全文下载"],
      value: 0,
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
    test() {
      axios
        .post("/messages/", {
          senderID: 11,
          receiverID: 10,
          content: "hahaha"
        })
        .then(res => {
          console.log(res);
        });
    }
  },
  components: {},
  beforeCreate() {
    axios
      .get("/papers")
      .then(res => {
        this.papers = res.data.papers;
        console.log(this.papers);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
