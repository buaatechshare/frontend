<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
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
</template>

<script>
import PaperBox from "../BOX/PaperBox";
export default {
  name: "paperBoxList",
  components: {
    PaperBox
  }
};
</script>