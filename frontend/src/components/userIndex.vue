<template>
  <div id="index">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem
        name="techshare"
        :to="{name: 'Upapers'}"
        style="width: 230px;text-align:center;font-size:22px"
      >
        <sui-icon name="braille"></sui-icon>techshare
      </MenuItem>
      <MenuItem name="papers" :to="{name: 'Upapers'}">
        <sui-icon name="file"></sui-icon>paper
      </MenuItem>
      <MenuItem name="patents" :to="{name: 'Upatents'}">
        <sui-icon name="sticky note"></sui-icon>patent
      </MenuItem>
      <MenuItem name="userspace" style="float:right" :to="{name: 'userspace'}">
        <sui-icon name="user circle outline" size="big"></sui-icon>
      </MenuItem>
      <MenuItem style="width: 40%">
        <Input search placeholder="Search..." @on-search="SearchFunction()" v-model="keywords"/>
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "userIndex",
  data() {
    return {
      keywords: ""
    };
  },
  methods: {
    SearchFunction() {
      this.$router.push({
        name: "Usearchpaper",
        query: { keywords: this.keywords }
      });
    }
  }
};
</script>
