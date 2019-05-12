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
  background: #2e5094;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-search {
  width: 800px;
  float: center;
}
.layout-nav {
  width: 220px;
  margin: 0 auto;
  margin-right: 20px;
  text-align: right;
}
.layout-footer-center {
  text-align: center;
}
.demo-split {
  height: 1000px;
  border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 15px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%',background:'#fff'}">
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-search">
            <MenuItem>
              <Input size="large" search placeholder="Enter something..."/>
            </MenuItem>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-contact-outline" size="30"></Icon>登录
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-person-add-outline" size="30"></Icon>注册
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
        <div class="demo-split">
          <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
              <paper-box></paper-box>
              <Divider/>
              <paper-box></paper-box>
              <Divider/>
              <paper-box></paper-box>
              <Divider/>
            </div>
            <div slot="right" class="demo-split-pane">
              <paper-box></paper-box>
              <Divider/>
              <paper-box></paper-box>
              <Divider/>
              <paper-box></paper-box>
              <Divider/>
            </div>
          </Split>
        </div>
      </Content>
      <Footer class="layout-footer-center">
        <Button type="primary">上一页</Button>
        <Divider type="vertical"/>
        <Button type="text">1</Button>
        <Divider type="vertical"/>
        <Button type="text">2</Button>
        <Divider type="vertical"/>
        <Button type="text">3</Button>
        <Button type="primary">下一页</Button>
      </Footer>
    </Layout>
  </div>
</template>
<script>
import { PaperBox } from "./components/BOX";
export default {
  data() {
    return {
      split1: 0.5
    };
  },
  name: "app",
  components: {
    PaperBox
  }
};
</script>
