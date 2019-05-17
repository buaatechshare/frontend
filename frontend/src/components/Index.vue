<template>
  <div id="index">
    <Menu mode="horizontal" theme="light" active-name="1">
      <MenuItem name="techshare" to="/">
        <sui-icon name="braille"></sui-icon>techshare
      </MenuItem>
      <MenuItem name="papers" to="/papers">
        <sui-icon name="file"></sui-icon>paper
      </MenuItem>
      <MenuItem name="patents" to="/patents">
        <sui-icon name="sticky note"></sui-icon>patent
      </MenuItem>
      <MenuItem style="float:right">
        <div is="sui-button-group">
          <sui-button basic primary>login</sui-button>
          <sui-button basic primary>register</sui-button>
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
import PaperBoxList from "./BOXList/PaperBoxList";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    PaperBoxList
  }
};
</script>
