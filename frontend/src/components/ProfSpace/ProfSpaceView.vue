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
          <MenuItem name="personalInfo" :to="{name: 'PinfoAlterView'}">
            <Icon type="md-document"/>个人信息
          </MenuItem>
          <Submenu name="collections">
            <template slot="title">
              <Icon type="ios-analytics"/>我的收藏
            </template>
            <MenuItem name="collectionPapers" :to="{name: 'PUserCollectionPaperView'}">
              <Icon type="md-heart"/>论文
            </MenuItem>
            <MenuItem name="collectionPatents" :to="{name:'PUserCollectionPatentView'}">
              <Icon type="md-heart"/>专利
            </MenuItem>
          </Submenu>
          <MenuItem name="follow" :to="{name:'PUserFollowView'}">
            <Icon type="md-heart"/>关注的人
          </MenuItem>

          <Submenu name="messages">
            <template slot="title">
              <Icon type="ios-analytics"/>站内信
            </template>
            <MenuItem name="collectionPapers" :to="{name: 'PUserSendMessage'}">
              <Icon type="md-heart"/>写信
            </MenuItem>
            <MenuItem name="collectionPatents" :to="{name:'PUserMessageView'}">
              <Icon type="md-heart"/>收信
            </MenuItem>
          </Submenu>

          <MenuItem name="manage" :to="{name: 'PManageView'}">
            <Icon type="md-leaf"/>成果管理
          </MenuItem>

          <MenuItem name="upload" :to="{name: 'ProfUploadView'}">
            <Icon type="md-leaf"/>上传成果
          </MenuItem>
        </Menu>
      </Sider>
    </div>
    <Layout :style="{marginLeft: '230px',marginRight:'20px'}">
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
