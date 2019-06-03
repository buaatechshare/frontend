<style>
.prof {
  border-radius: 50%;
  width: 200px;
}
.profname {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
}
.profcons {
  font-size: 17px;
  color: grey;
  margin-bottom: 10px;
  overflow: hidden;
  width: 500px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-break: break-all;
}
.profpos {
  font-size: 16px;
  margin-bottom: 10px;
}
.profnum {
  margin-top: 10px;
  color: grey;
}
</style>
<template>
  <div id="index">
    <div style="margin-left:200px;margin-right:400px">
      <!---->
      <div style="margin-top:80px;width:865px">
        <div name="profimg" style="float:left">
          <img class="prof" src="../assets/profpic.jpg">
        </div>
        <div style="float:left;margin-top:40px">
          <div class="profname">{{profdetail.name}}</div>
          <div
            class="profcons"
          >“Department of Computer Science, University of Illinois at Urbana-Champaign</div>
          <div class="profpos">职位：{{profdetail.position}}</div>
          <div class="proffield">
            研究领域：
            <span v-for="interest in interests" style="margin-right:5px">{{interest}}</span>
          </div>
          <div class="profnum">出版量:{{profdetail.n_pubs}},被引量:{{profdetail.n_citation}},搜索量:175</div>
        </div>
        <div style="float:right;margin-top:40px">
          <sui-button
            style="background-color:#cae4ff;color:#2693ff;margin:0px 5px"
            content="关注"
            icon="bell outline"
          />
        </div>
        <Divider style="margin-bottom:30px"/>
      </div>

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
  name: "profview",
  data() {
    return {
      active: "相关论文",
      items: ["相关论文", "相关专利"],
      profdetail: [],
      interests: []
    };
  },
  beforeCreate() {
    axios
      .get("/professor/{}", {
        params: {
          userID: 111
        }
      })
      .then(res => {
        this.profdetail = res.data;
        this.interests = this.profdetail.interests;
      })
      .catch(err => {
        console.error(err);
      });
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
