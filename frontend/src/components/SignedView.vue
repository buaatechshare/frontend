<style>
.Tags {
  width: 70px;
  height: 30px;
  font-size: 13px;
}
.Tagfont {
  line-height: 30px;
}
.chosedtheme {
  height: 150px;
  width: 500px;
  margin: 0 auto;
  text-align: left;
}
.textlook {
  color: grey;
  width: 500px;
  margin: 0 auto;
  text-align: left;
}
</style>
<template>
  <div style="text-align:center">
    <div style="margin-top:50px;margin-bottom:30px;">
      <Input
        search
        enter-button="搜索"
        placeholder="请输入标签..."
        style="width:500px;margin:0 auto"
        @on-search="TagSearch()"
      />
    </div>
    <div class="textlook">已选择：</div>
    <div class="chosedtheme">
      <Tag
        type="border"
        v-for="theme in themelist"
        v-if="theme.themeshow"
        closable
        @on-close="handleClose(theme.themeindex)"
        :key="index"
      >{{theme.themename}}</Tag>
    </div>
    <div class="textlook">请选择感兴趣的主题：</div>
    <div>
      <wordcloud
        :data="defaultWords"
        nameKey="name"
        valueKey="value"
        :color="myColors"
        :showTooltip="true"
        :wordClick="wordClickHandler"
      ></wordcloud>
      <!-- <Tag checkable color="primary" class="Tags">
        <div class="Tagfont">标签一</div>
      </Tag>-->
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import wordcloud from "vue-wordcloud";

export default {
  name: "app",
  components: {
    wordcloud
  },
  created() {
    var themelist = [];
  },
  methods: {
    TagSearch() {},
    handleClose(index) {
      themelist[index].themeshow = false;
    },
    wordClickHandler(name, value, vm) {
      var themeobj = {
        themename: name,
        themeshow: true,
        themeindex: value
      };
      Vue.set(this.themelist, this.themelist[value], this.themeobj);
      alert(this.themeobj);
    }
  },

  data() {
    return {
      show: true,
      themelist: [],
      myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"],
      defaultWords: [
        {
          name: "Cat",
          value: 1
        },
        {
          name: "fish",
          value: 2
        },
        {
          name: "things",
          value: 3
        },
        {
          name: "look",
          value: 4
        },
        {
          name: "two",
          value: 5
        },
        {
          name: "fun",
          value: 6
        },
        {
          name: "know",
          value: 7
        },
        {
          name: "good",
          value: 8
        },
        {
          name: "play",
          value: 9
        }
      ]
    };
  }
};
</script>
