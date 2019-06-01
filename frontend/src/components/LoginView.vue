<template>
  <div id="loginView">
    <img src="../assets/bg.jpg" style="width:100%">
    <div style="margin-top:200px">
      <Modal v-model="loginShow" width="540" :closable="false" :mask-closable="false">
        <h2 style="margin:10px;color:#abcdef;text-align:center">
          <sui-icon name="braille"></sui-icon>techshare
        </h2>
        <Form ref="formValidate" :model="loginModel" :rules="ruleValidate">
          <FormItem label="email" prop="email">
            <Input v-model="loginModel.username" placeholder="Enter your email"></Input>
          </FormItem>
          <FormItem label="password" prop="password">
            <Input v-model="loginModel.password" placeholder="Enter your password"></Input>
          </FormItem>
          <FormItem>
            <ButtonGroup>
              <Button type="primary" to="/papers">cancel</Button>
              <Button to="/register" style="float:left">signup</Button>
            </ButtonGroup>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" @click="handleSubmit()" long>login</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "loginView",
  data() {
    return {
      loginModel: {
        username: "",
        password: ""
      },
      ruleValidate: {},
      loginShow: true
    };
  },
  methods: {
    handleSubmit: function() {
      axios
        .post("/login/", this.loginModel)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.$Message.info("登录成功！");
            this.$router.push({
              name: "user",
              params: { userID: "123333" }
            });
          } else {
            this.$Message.info("登录账号或者密码错误！");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
