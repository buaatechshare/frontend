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
  <sui-card class="raised">
    <sui-card-content>
      <sui-icon name="male"></sui-icon>
      {{patent.rightholder}}
    </sui-card-content>
    <sui-card-content style="height:200px">
      <sui-card-header>
        <a @click="jump(patent)">{{patent.patentName}}</a>
      </sui-card-header>
      <br>
      <div class="summary">{{patent.summary}}</div>
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
  name: "patentBox",
  methods: {
    jump: function(patent) {
      if (this.$route.params.userID) {
        this.$router.push({
          name: "Upatentview",
          query: { resourceID: patent.resourceID }
        });
      } else {
        this.$router.push({
          name: "patentview",
          query: { resourceID: patent.resourceID }
        });
      }
    }
  },
  props: ["patent"]
};
</script>