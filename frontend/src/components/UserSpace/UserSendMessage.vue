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
          <Option v-for="(user, index) in users" :value="user.name" :key="index">{{user.name}}</Option>
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
    this.message.receiverName = this.$route.params.receiverName;
    
  },
  methods: {
    send() {
      for (var user in this.users) {
        if (user.name == this.message.receiverName) {
          this.message.receiverID = user.userID;
          break;
        }
      }
      console.log(this.message);
      axios
        .post("/messages/", this.message)
        .then(res => {
          console.log(res);
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
      console.log(this.message.receiverName);
      if (query != "") {
        this.loading = true;
        axios
          .get("/search/users/", this.message.receiverName)
          .then(res => {
            console.log(res);
            this.users = res.data.user;
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
      }
    }
  }
};
</script>
    