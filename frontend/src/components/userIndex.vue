<template>
  <div id="index">
    <Menu mode="horizontal" theme="light" active-name="1">
      <MenuItem name="patents" to="/patents">
        <sui-icon name="sticky note"></sui-icon>patent
      </MenuItem>
      <MenuItem style="float:right">
        <div is="sui-button-group">
          <sui-icon name="male"></sui-icon>
        </div>
      </MenuItem>
      <MenuItem>
        <sui-input placeholder="Search..." icon="search"/>
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "userindex",
  data() {
    return {};
  },
  components: {}
};
</script>
