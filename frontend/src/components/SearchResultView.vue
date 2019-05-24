<style scoped>
.layout {
  border: 0px;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}
</style>
<template>
  <div class="layout">
    <Sider
      :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto',background:'white'}"
    >
      <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>搜索目标
          </template>
          <MenuItem name="1-1" to="/searchresult/searchpaper">论文</MenuItem>
          <MenuItem name="1-2">专利</MenuItem>
          <MenuItem name="1-3">专家</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>时间
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>排序
          </template>
          <MenuItem name="3-1">相关性排序</MenuItem>
          <MenuItem name="3-2">时间排序</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px',marginRight:'200px'}">
      <Content :style="{padding: '0 16px 16px',background:'white'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {};
</script>
