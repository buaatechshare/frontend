<template>
  <div id="index">
    <Menu mode="horizontal" theme="dark" active-name="1">
<<<<<<< HEAD
      <MenuItem
        name="techshare"
        :to="{name: 'Upapers'}"
        style="width: 230px;text-align:center;font-size:22px"
      >
=======
      <MenuItem name="techshare" :to="{name: 'Upapers'}" style="width: 230px;text-align:center;font-size:22px">
>>>>>>> b60186e69bfee1214f6a9c0fb5bc1b3261e72449
        <sui-icon name="braille"></sui-icon>techshare
      </MenuItem>
      <MenuItem name="papers" :to="{name: 'Upapers'}">
        <sui-icon name="file"></sui-icon>paper
      </MenuItem>
      <MenuItem name="patents" :to="{name: 'Upatents'}">
        <sui-icon name="sticky note"></sui-icon>patent
      </MenuItem>
      <MenuItem name="userspace" style="float:right" :to="{name: 'userspace'}">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></Avatar>
      </MenuItem>
      <MenuItem style="width: 800px">
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
      this.$router.push({ name: "Usearchpaper" });
      // 未添加数据传递功能
    }
  },
  components: {}
};
</script>
