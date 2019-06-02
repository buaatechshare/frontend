<template>
  <div id="loginView">
    <img src="../assets/bg.jpg" style="width:100%">
    <div style="margin-top:200px">
      <Modal v-model="loginShow" width="540" :closable="false" :mask-closable="false">
        <h2 style="margin:10px;color:#abcdef;text-align:center">
          <sui-icon name="braille"></sui-icon>techshare
        </h2>
        <Form ref="loginModel" :model="loginModel" :rules="ruleValidate">
          <FormItem label="邮箱" prop="username">
            <Input v-model="loginModel.username"></Input>
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input type="password" v-model="loginModel.password"></Input>
          </FormItem>
          <FormItem>
            <ButtonGroup>
              <Button type="primary" to="/papers">取消</Button>
              <Button to="/register" style="float:left">注册</Button>
            </ButtonGroup>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" @click="handleSubmit('loginModel')" long>登录</Button>
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
      ruleValidate: {
        username: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "Password cannot be empty",
            trigger: "blur"
          }
        ]
      },
      loginShow: true
    };
  },
  methods: {
    handleSubmit: function(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
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
        } else {
          this.$Message.error("信息有误!");
        }
      });
    }
  }
};
</script>
