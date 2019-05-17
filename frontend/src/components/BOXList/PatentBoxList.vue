<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <div>
      <sui-card-group :items-per-row="2">
        <patentBox></patentBox>
        <patentBox></patentBox>
        <patentBox></patentBox>
        <patentBox></patentBox>
        <patentBox></patentBox>
        <patentBox></patentBox>
      </sui-card-group>
    </div>
  </div>
</template>

<script>
import patentBox from "../BOX/PatentBox";
export default {
  name: "papentBoxList",
  components: {
    patentBox
  }
};
</script>