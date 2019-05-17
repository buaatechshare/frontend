<template>
<body id="root">
  <Menu mode="horizontal" theme="light" active-name="1">
    <MenuItem>
      <sui-icon name="braille"></sui-icon>techshare
    </MenuItem>
    <MenuItem>
      <sui-icon name="file"></sui-icon>paper
    </MenuItem>
    <MenuItem>
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
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <div>
      <sui-card-group :items-per-row="2">
        <paper-box></paper-box>
        <paper-box></paper-box>
        <paper-box></paper-box>
        <paper-box></paper-box>
        <paper-box></paper-box>
        <paper-box></paper-box>
        <paper-box></paper-box>
        <paper-box></paper-box>
      </sui-card-group>
    </div>
  </div>
</body>
</template>
<script>
import { PaperBox } from "./components/BOX";
export default {
  name: "app",
  data() {
    return {
      split1: 0.5
    };
  },
  components: {
    PaperBox
  }
};
</script>
