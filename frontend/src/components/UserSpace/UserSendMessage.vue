<template>
  <div style="margin-top:30px">
    <Form v-model="message">
      <FormItem>
        <Select
          prefix="ios-contact"
          v-model="message.receiverName"
          filterable
          remote
          :remote-method="searchUser"
          :loading="loading"
        >
          <Option v-for="(user, index) in users" :value="user[0]" :key="index">{{user[0]}}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Input v-model="message.content" type="textarea" :rows="8" placeholder="请输入正文"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="send">发送</Button>
      </FormItem>
    </Form>

    <!--<Modal title="提示" @on-ok="ok">
      <br>
      <p>信件已发送。</p>
      <p>
        <br>
      </p>
    </Modal>-->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UserSendMessage",
  data() {
    return {
      message: {
        receiverName: "",
        receiverID: "",
        senderID: this.$route.params.userID,
        content: ""
      },
      users: [],
      loading: false
    };
  },
  created(){
    //console.log("wryyyyyyyy!");
    //console.log(this.message);
    //console.log(this.$route.params.receiverName);
    //console.log(this.message.receiverName);
    if(this.$route.params.receiverName && this.$route.params.receiverID){
      this.message.receiverName = this.$route.params.receiverName;
      this.message.receiverID = this.$route.params.receiverID;
    }
  },
  methods: {
    send() {
      this.message.receiverID = this.users[0][1];
      console.log(this.message);
      axios
        .post("/messages/", this.message)
        .then(res => {
          console.log(res);
          if(res.status == 201)
          {
            this.$Message.info("发送成功！");
            this.$router.go(0);
          }
          else{
            this.$Message.info("send message failed.");
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    ok() {
      this.$Message.info("message sent successfully.");
      this.$router.go(0);
    },
    searchUser(query) {
      if (query != "") {
        this.loading = true;
        axios
          .get("/receiver/"+query+"/")
          .then(res => {
            this.users = res.data.user;
            console.log(this.users);
          })
          .catch(err => {
            console.error(err);
          });
        // setTimeout(() => {
        //   this.loading = false;
        // }, 200);
        this.loading = false;
      } else {
        this.users = [];
        //console.log(this.users);
      }
    }
  }
};
</script>
    