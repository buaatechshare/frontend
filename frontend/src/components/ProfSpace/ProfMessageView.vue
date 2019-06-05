<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <sui-card-group :items-per-row="1">
      <MessageBox v-for="(message, index) in messages" v-bind:message="message" :key="index"/>
    </sui-card-group>
    <div class="ui horizontal divider"></div>
    <!--Page :total="100" show-elevator style="margin-bottom:100px"/-->
  </div>
</template>

<script>
import MessageBox from "../ProfSpace/ProfMessageBox.vue";
import axios from "axios";
export default {
  name: "MessageBoxList",
  components: {
    MessageBox
  },
  data() {
    return {
      messages: []
    };
  },
  beforeCreate() {
    axios
      .get("/messages/",{params:{receiverID:this.$route.params.userID}})
      .then(res => {
        console.log(res);
        this.messages = res.data.results;
        console.log(this.messages);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>