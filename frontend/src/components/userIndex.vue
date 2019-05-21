<template>
  <div id="index">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="techshare" to="/papers">
        <sui-icon name="braille"></sui-icon>techshare
      </MenuItem>
      <MenuItem name="papers" to="/papers">
        <sui-icon name="file"></sui-icon>paper
      </MenuItem>
      <MenuItem name="patents" to="/patents">
        <sui-icon name="sticky note"></sui-icon>patent
      </MenuItem>
      <MenuItem style="float:right">
        <sui-icon name="photo"></sui-icon>username
      </MenuItem>
      <MenuItem>
        <sui-input placeholder="Search..." icon="search"/>
      </MenuItem>
    </Menu>
    <Menu :theme="theme3" active-name="1">
      <MenuItem name="personalInfo">
        <Icon type="md-document"/>个人信息
      </MenuItem>
      <MenuItem name="collections">
        <Icon type="md-chatbubbles"/>我的收藏
      </MenuItem>
      <MenuItem name="follow">
        <Icon type="md-heart"/>关注的人
      </MenuItem>
      <MenuItem name="messageBox">
        <Icon type="md-leaf"/>站内信
      </MenuItem>
      <MenuItem name="apply">
        <Icon type="md-leaf"/>申请专家认证
      </MenuItem>
    </Menu>
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
