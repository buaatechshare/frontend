<template>
  <div id="index">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="techshare" to="/papers">
        <sui-icon name="braille"></sui-icon>techshare
      </MenuItem>
      <MenuItem name="papers" to="/papers">
        <sui-icon name="file"></sui-icon>paper
      </MenuItem>
      <MenuItem name="patents" :to="{name: 'Upatents'}">
        <sui-icon name="sticky note"></sui-icon>patent
      </MenuItem>
      <MenuItem name="userspace" style="float:right" :to="{name: 'userspace'}">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></Avatar>
      </MenuItem>
      <MenuItem>
        <Input search placeholder="Search..." @on-search="SearchFunction()"/>
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "userIndex",
  data() {
    return {};
  },
  methods: {
    SearchFunction() {
      this.$router.push({ path: "./searchresult" });
      // 未添加数据传递功能
    }
  },
  components: {}
};
</script>
