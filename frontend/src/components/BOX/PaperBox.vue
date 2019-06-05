<style>
.summary {
  font-size: 13px;
  margin-bottom: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 10;
  word-break: break-all;
}
</style>
<template>
  <sui-card @click="jump(paper)">
    <sui-card-content>
      <sui-icon name="male"></sui-icon>
      <a v-for="(author, index) in paper.author" :key="index" style="color:black">
        {{author.name+' '}}
        <Divider type="vertical"/>
      </a>
      
    </sui-card-content>
    <sui-card-content style="height:300px">
      <sui-card-header>{{paper.paperName}}</sui-card-header>
      <br>
      <div class="summary">{{paper.abstract}}</div>
    </sui-card-content>
    <sui-card-content extra>
      <span slot="right">
        <sui-icon name="heart outline"/>
      </span>
      <sui-icon name="expand arrows alternate"></sui-icon>details
    </sui-card-content>
  </sui-card>
</template>

<script>
export default {
  name: "paperBox",
  data() {
    return {};
  },
  methods: {
    jump: function() {
      if (this.$route.params.userID) {
        this.$router.push({
          name: "Upaperview",
          query: { resourceID: this.paper.id }
        });
      } else {
        this.$router.push({
          name: "paperview",
          query: { resourceID: this.paper.id }
        });
      }
    }
  },
  props: ["paper"]
};
</script>