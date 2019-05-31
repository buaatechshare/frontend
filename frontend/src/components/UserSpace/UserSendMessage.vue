<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <Input v-model="messageModel.receiverID">
      <span slot="prepend">收信人</span>
    </Input>
    <br>
    <Input v-model="messageModel.content" type="textarea" :rows="8" placeholder="请输入正文"/>
    <br>
    <br>
    <Button type="primary" @click="send(messageModel)">发送</Button>
    <!--<Modal v-model="modal1" title="提示" @on-ok="ok">
      <br>
      <p>信件已发送。</p>
      <br>
    </Modal>-->
    <div class="ui horizontal divider"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      messageModel: {
        receiverID: "",
        content: "",
        senderID: "123123" // need to get this.
      },
      //modal1: false
    };
  },
  methods: {
    send: function(messageModel) {
      axios
        .post("/messages", messageModel)
        .then(res => {
          console.log(res);
          console.log(messageModel.receiverID);
          console.log(messageModel.content);
          console.log("wryyyyyyyyyyyyyyyyy!!!!!");
          if(res.status == 201) {
            this.$Message.info("信件已发送");
            this.$router.go(0);
          }
          else {
            this.$Message.info("信件发送失败");
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
  }
};
</script>
    