<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <layout>
      <layout>
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
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
            <MenuItem name="follow">
              <Icon type="md-heart"/>关注的人
            </MenuItem>
            <MenuItem name="messageBox">
              <Icon type="md-leaf"/>站内信
            </MenuItem>
            <MenuItem name="apply" :to="{name: 'UserApplyView'}">
              <Icon type="md-leaf"/>申请专家认证
            </MenuItem>
          </Menu>
        </Sider>
        <layout>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </layout>
      </layout>
    </layout>
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
