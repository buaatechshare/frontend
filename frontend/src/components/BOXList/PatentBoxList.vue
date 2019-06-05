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
      <Page
        :total="pageTotal"
        :current="pageNum"
        :page-size="pageSize"
        @on-change="handlePage"
        show-elevator
        style="margin-bottom:100px"
      />
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
      patents: [],
      professors: [],
      pageTotal: 100,
      pageNum: 1,
      pageSize: 0,
      userID: 0
    };
  },
  methods: {
    handlePage(value) {
      this.pageNum = value;
      axios
        .get("/patentsRec/0/", {
          params: {
            page: this.pageNum
          }
        })
        .then(res => {
          console.log(res);
          this.patents = res.data.results;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  beforeCreate() {
    if (this.$route.query)
      axios
        .get("/patentsRec/0/")
        .then(res => {
          console.log(res);
          this.patents = res.data.results;
        })
        .catch(err => {
          console.error(err);
        });
  }
};
</script>