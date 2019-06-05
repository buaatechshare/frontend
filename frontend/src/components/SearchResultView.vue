<style scoped>
.layout {
  border: 0px;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}
.zcontent {
  z-index: 999;
}
</style>
<template>
  <div class="layout">
    <div class="zcontent">
      <Sider
        :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto',background:'white'}"
        width="230"
      >
        <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-compass-outline" size="20"/>搜索目标
            </template>
            <MenuItem
              name="1-1"
              :to="{ path: 'searchpaper', query: { keywords: this.keywords }}"
              append
            >论文</MenuItem>
            <MenuItem
              name="1-2"
              :to="{ path: 'searchpatent', query: { keywords: this.keywords }}"
              append
            >专利</MenuItem>
            <MenuItem
              name="1-3"
              :to="{ path: 'searchprof', query: { keywords: this.keywords }}"
              append
            >专家</MenuItem>
          </Submenu>
          
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-list" size="20"/>排序方式
            </template>
            <MenuItem name="2-1">相关性排序</MenuItem>
            <MenuItem name="2-2">时间排序</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
    </div>
    <Layout :style="{marginLeft: '230px',marginRight:'200px'}">
      <Content :style="{padding: '0 16px 16px',background:'white'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "SearchResultView",
  data() {
    return {
      keywords: this.$route.query.keywords
    };
  },
  methods: {
    Datachange() {
      this.keywords = this.$route.query.keywords;
    }
  },
  watch: {
    $route: "Datachange"
  }
};
</script>
