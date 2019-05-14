<<<<<<< HEAD
 
=======
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
  margin: 15px 20px 0px 20px;
}
.layout-search {
  width: 300px;
  float: center;
}
.layout-nav {
  width: 220px;
  margin: 0 auto;
  float: right;
  height: 70px;
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
      <Header :style="{position: 'fixed', width: '100%',background:'#fff',height:'70px'}">
        <Menu mode="horizontal" theme="light" active-name="1" style="height:70px">
          <div class="layout-logo"></div>
          <div class="layout-search" style="display: inline">
            <Input style="width: 300px" size="large" search placeholder="Enter something..."/>
          </div>
          <div class="layout-nav" style="display: inline">
            <icon type="ios-contact-outline" size="30"></icon>
            <Button style="border-width:0px;margin:0px">登录</Button>
            <icon type="ios-person-add-outline" size="30"></icon>
            <Button style="border-width:0px;margin:0px">注册</Button>
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
>>>>>>> 258470726ea5641ccb579d58b1c6054c4316eecf
