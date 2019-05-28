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
        <Menu active-name="1-2" width="auto">
          <MenuItem name="personalInfo" :to="{name: 'infoAlterView'}">
            <Icon type="md-document"/>个人信息
          </MenuItem>
          <Submenu name="collections">
            <template slot="title">
              <Icon type="ios-analytics"/>我的收藏
            </template>
            <MenuItem name="collectionPapers" :to="{name: 'UserCollectionPaperView'}">
              <Icon type="md-heart"/>论文
            </MenuItem>
            <MenuItem name="collectionPatents" :to="{name:'UserCollectionPatentView'}">
              <Icon type="md-heart"/>专利
            </MenuItem>
          </Submenu>
          <MenuItem name="follow" :to="{name:'UserFollowView'}">
            <Icon type="md-heart"/>关注的人
          </MenuItem>
          <MenuItem name="messageBox" :to="{name:'UserMessageView'}">
            <Icon type="md-leaf"/>站内信
          </MenuItem>
          <MenuItem name="apply" :to="{name: 'UserApplyView'}">
            <Icon type="md-leaf"/>申请专家认证
          </MenuItem>
        </Menu>
      </Sider>
    </div>
    <Layout :style="{marginLeft: '0px',marginRight:'20px'}">
      <Content :style="{padding: '0 16px 16px',background:'white'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "defaultindex",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>
