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
            <MenuItem name="1-1" to="/searchresult/searchpaper">论文</MenuItem>
            <MenuItem name="1-2" to="/searchresult/searchpatent">专利</MenuItem>
            <MenuItem name="1-3" to="/searchresult/searchprof">专家</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-clock-outline" size="20"/>时间
            </template>
            <MenuItem name="2-1">2019以来</MenuItem>
            <MenuItem name="2-2">2018以来</MenuItem>
            <MenuItem name="2-3">2017以来</MenuItem>
            <MenuItem name="2-4">
              <!-- 日期选择器 -->
              <DatePicker
                type="year"
                size="small"
                placeholder="Select year"
                style="width: 70px"
                placement="top"
              />-
              <p></p>
              <DatePicker
                type="year"
                size="small"
                placeholder="Select year"
                style="width: 70px"
                placement="top"
              />
              <Button size="small" shape="circle" icon="ios-search"></Button>
            </MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-list" size="20"/>排序方式
            </template>
            <MenuItem name="3-1">相关性排序</MenuItem>
            <MenuItem name="3-2">时间排序</MenuItem>
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
export default {};
</script>
