<template>
  <div id="patentBoxList">
    <div class="ui container horizontal">
      <div class="ui horizontal divider"></div>
      <div>
        <sui-card-group :items-per-row="2">
          <patentBox v-for="(patent, index) in patents" :patent="patent" :key="index"></patentBox>
        </sui-card-group>
      </div>
      <div class="ui horizontal divider"></div>
      <Page :total="100" show-elevator style="margin-bottom:100px"/>
    </div>
  </div>
</template>

<script>
import patentBox from "../BOX/PatentBox";
import axios from "axios";
export default {
  name: "papentBoxList",
  components: {
    patentBox
  },
  data() {
    return {
      patents: []
    };
  },
  beforeCreate() {
    axios
      .get("/patents")
      .then(res => {
        this.patents = res.data.patents;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>