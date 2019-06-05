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
        <Menu active-name="1" theme="light" width="auto" :open-names="['1']">
          <MenuItem name="1" :to="{name:'adminapplylistview'}" >
            <Icon type="ios-analytics" size="20"/>专家认证审核
          </MenuItem>
          <MenuItem name="2" :to="{name:'adminsourcelistview'}">
            <Icon type="ios-contacts-outline" size="20"/>资源审核
          </MenuItem>
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
