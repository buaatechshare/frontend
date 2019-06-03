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
  <div style="text-align:center;margin-left:200px;margin-right:200px">
    <div style="margin-top:50px;margin-bottom:30px;">
      <Input
        search
        enter-button="搜索标签"
        placeholder="请输入感兴趣的..."
        style="width:500px;margin:0 auto"
        @on-search="foundTag()"
        v-model="receiverTag"
      />
    </div>
    <div class="textlook">已选择：</div>
    <div class="chosedtheme">
      <Tag type="border" v-if="show" v-for="(theme,index) in themelist" :key="index">{{theme}}</Tag>
    </div>
    <div style="text-align:right;width:500px;margin:0 auto">
      <Button @click="sendinterests">提交</Button>
    </div>
    <div class="textlook">请选择感兴趣的主题：</div>
    <div>
      <wordcloud
        :data="interestTags"
        nameKey="name"
        valueKey="value"
        :color="myColors"
        :showTooltip="false"
        :wordClick="wordClickHandler"
        :rotate="{from:0, to:0, numOfOrientation:1}"
      ></wordcloud>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import wordcloud from "vue-wordcloud";
import axios from "axios";
var themelist = [""];
export default {
  name: "app",
  components: {
    wordcloud
  },
  methods: {
    handleClose(index) {
      this.show = false;
    },
    wordClickHandler(name, value, vm) {
      Vue.set(this.themelist, this.themelist.length, name);
    },
    sendinterests() {
      axios//mock上接口有问题
        .post("/interests", {
          data: {
            userID: this.$route.params.userID,
            field: this.themelist
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
      this.themelist = [];
    },
    foundTag() {
      console.log(this.receiverTag);
      axios
        .get("/interests",{
          params:{
            keywords:this.receiverTag
          }
        })
        .then(res => {
          this.defaultWords = res.data.tags;
          console.log(res.data.tags);
          for (var i = 0; i < this.defaultWords.length; i++) {
            this.interestTags.push({
              value: Math.ceil(Math.random() * 20),
              name: this.defaultWords[i]
            });
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    
  },

  data() {
    return {
      show: true,
      themelist: [],
      myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"],
      defaultWords: [],
      interestTags: [],
      receiverTag: ""
    };
  }
};
</script>