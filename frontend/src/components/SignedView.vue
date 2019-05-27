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
        enter-button="Search"
        placeholder="Enter something..."
        style="width:500px;margin:0 auto"
        @on-search="TagSearch()"
      />
    </div>
    <div class="textlook">已选择：</div>
    <div class="chosedtheme">
      <Tag
        type="border"
        v-if="show"
        closable
        @on-close="handleClose(index)"
        v-for="(theme,index) in themelist"
        :key="index"
      >{{theme}}</Tag>
    </div>
    <div class="textlook">请选择感兴趣的主题：</div>
    <div>
      <wordcloud
        :data="defaultWords"
        nameKey="name"
        valueKey="value"
        :color="myColors"
        :showTooltip="false"
        :wordClick="wordClickHandler"
        :rotate="{from:0, to:0, numOfOrientation:1}"
        spiral="rectangular"
      ></wordcloud>
      <Tag checkable color="primary" class="Tags">
        <div class="Tagfont">标签一</div>
      </Tag>
    </div>
  </div>
</template>
<script>
import wordcloud from "vue-wordcloud";

var themelist = [""];

export default {
  name: "app",
  components: {
    wordcloud
  },
  methods: {
    TagSearch() {},
    handleClose(index) {
      this.show = false;
    },
    wordClickHandler(name, value, like, vm) {
      Vue.set(this.themelist, this.themelist.length, name);
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
          value: 26
        },
        {
          name: "fish",
          value: 19
        },
        {
          name: "things",
          value: 18
        },
        {
          name: "look",
          value: 16
        },
        {
          name: "two",
          value: 15
        },
        {
          name: "fun",
          value: 9
        },
        {
          name: "know",
          value: 9
        },
        {
          name: "good",
          value: 9
        },
        {
          name: "play",
          value: 6
        }
      ]
    };
  }
};
</script>