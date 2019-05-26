<style>
.label {
  color: grey;
  font-size: 14px;
  float: left;
  width: 66px;
}
.tablelabel {
  color: grey;
  font-size: 12px;
  width: 80px;
}
.papercontent {
  color: grey;
  font-size: 14px;
  float: left;
  width: 800px;
}
.tablecontent {
  color: grey;
  font-size: 12px;
  width: 353px;
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
        <h2 style="color:#006ddb" is="sui-header">蛙人助推器</h2>
        <!--来源 收藏 阅读量-->
        <p style="color:grey;font-size:12px">
          来自 维普
          <Divider type="vertical"/>
          <sui-icon name="heart outline"/>收藏
          <Divider type="vertical" dashed/>阅读量 5
        </p>
        <!--专利信息-->
        <sui-table-row>
          <sui-table-cell class="tablelabel">申请号：</sui-table-cell>
          <sui-table-cell class="tablecontent">CN201721535512.3</sui-table-cell>
          <sui-table-cell class="tablelabel">申请日：</sui-table-cell>
          <sui-table-cell class="tablecontent">2017-11-16</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">公开号：</sui-table-cell>
          <sui-table-cell class="tablecontent">CN208439405U</sui-table-cell>
          <sui-table-cell class="tablelabel">公开日：</sui-table-cell>
          <sui-table-cell class="tablecontent">2019-01-29</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">授权公开号：</sui-table-cell>
          <sui-table-cell class="tablecontent">CN208439405U</sui-table-cell>
          <sui-table-cell class="tablelabel">授权公开日：</sui-table-cell>
          <sui-table-cell class="tablecontent">2019-01-29</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">申请人：</sui-table-cell>
          <sui-table-cell class="tablecontent">周守祥</sui-table-cell>
          <sui-table-cell class="tablelabel">申请地：</sui-table-cell>
          <sui-table-cell class="tablecontent">402191 重庆市永川区朱沱镇四望山村凉水井ewewewew村民小组35号</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">发明人：</sui-table-cell>
          <sui-table-cell class="tablecontent">周守祥</sui-table-cell>
          <sui-table-cell class="tablelabel">当前权利人：</sui-table-cell>
          <sui-table-cell class="tablecontent">邬剑星</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">专利代理机构：</sui-table-cell>
          <sui-table-cell class="tablecontent">重庆谢成律师事务所</sui-table-cell>
          <sui-table-cell class="tablelabel">代理人：</sui-table-cell>
          <sui-table-cell class="tablecontent">邬剑星</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">主分类号：</sui-table-cell>
          <sui-table-cell class="tablecontent">B63C11/02</sui-table-cell>
          <sui-table-cell class="tablelabel">分类号：</sui-table-cell>
          <sui-table-cell class="tablecontent">B63C11/02</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell class="tablelabel">优先权：</sui-table-cell>
          <sui-table-cell class="tablecontent">重庆谢成律师事务所</sui-table-cell>
        </sui-table-row>
        <Divider dashed/>
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

        <!--三个按钮-->
        <div style="clear:both"></div>
        <div style="margin-top:20px;margin-bottom:20px">
          <sui-button
            icon="star outline"
            style="background-color:#cae4ff;color:#2693ff;margin:0px 5px"
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
        <!--评分评价-->
        <div style="margin-bottom:10px">
          <sui-icon name="bell outline"/>评分
          <Rate v-model="value"/>
        </div>
        <div style="margin-bottom:10px">
          <sui-icon name="edit outline"/>评论
        </div>
        <div>
          <Input
            v-model="value6"
            style="width:865px"
            type="textarea"
            :rows="3"
            :autosize="{maxRows: 3,minRows: 3}"
            placeholder="Enter something..."
          />
        </div>
        <div style="width:865px;text-align:right;margin-top:10px;margin-bottom:10px">
          <sui-button>发表评论</sui-button>
        </div>
        <!--评论列表-->
        <div style="width:865px">
          <sui-list divided relaxed>
            <sui-list-item>
              <div class="comment">
                <sui-list-icon name="github" size="large" vertical-align="middle"/>zyh
                <br>
                <Rate v-model="valueCustomText" disabled></Rate>
              </div>
              <sui-list-content>
                <p>评论内容</p>
              </sui-list-content>
            </sui-list-item>
            <sui-list-item>
              <div class="comment">
                <sui-list-icon name="github" size="large" vertical-align="middle"/>dky
                <br>
                <Rate v-model="valueCustomText" disabled></Rate>
              </div>
              <sui-list-content>
                <p>评论内容</p>
              </sui-list-content>
            </sui-list-item>
            <sui-list-item>
              <div class="comment">
                <sui-list-icon name="github" size="large" vertical-align="middle"/>xhz
                <br>
                <Rate v-model="valueCustomText" disabled></Rate>
              </div>
              <sui-list-content>
                <p>评论内容</p>
              </sui-list-content>
            </sui-list-item>
          </sui-list>
        </div>
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
export default {
  name: "patentview",
  data() {
    return {
      active: "资料来源",
      items: ["资料来源", "全文下载"],
      value: 0
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    }
  },
  components: {}
};
</script>
