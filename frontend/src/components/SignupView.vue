<template>
  <div id="signupView">
    <!--signup view-->
    <img src="../assets/bg.jpg" style="width:100% ">
    <div>
      <Modal v-model="signupShow" style="width:800px" :closable="false" :mask-closable="false">
        <h2 style="margin:10px;color:#abcdef;text-align:center">
          <sui-icon name="braille"></sui-icon>techshare
        </h2>
        <Form ref="signupModel" :model="signupModel" :rules="signupRule">
          <FormItem label="姓名" prop="name">
            <Input v-model="signupModel.name"></Input>
          </FormItem>
          <FormItem label="邮箱" prop="email">
            <Input v-model="signupModel.email"></Input>
          </FormItem>
          <FormItem label="电话" prop="phone">
            <Input v-model="signupModel.phone"></Input>
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input type="password" v-model="signupModel.password"></Input>
          </FormItem>
          <FormItem label="密码确认" prop="passwordDBL">
            <Input type="password" v-model="signupModel.passwordDBL"></Input>
          </FormItem>
          <FormItem>
            <ButtonGroup>
              <Button type="primary" to="/papers">取消</Button>
              <Button to="/login" style="float:left">登录</Button>
            </ButtonGroup>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" @click="handleRegister('signupModel')" long>注册</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "signupView",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.signupModel.passwordDBL !== "") {
          // 对第二个密码框单独验证
          this.$refs.signupModel.validateField("passwordDBL");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.signupModel.password) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    return {
      signupModel: {
        name: "",
        email: "",
        password: "",
        phone: ""
      },
      signupRule: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        phone: [
          {
            required: true,
            message: "The phone cannot be empty",
            trigger: "blur"
          }
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        passwordDBL: [{ validator: validatePassCheck, trigger: "blur" }]
      },
      signupShow: true
    };
  },
  methods: {
    handleRegister: function(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          axios
            .post("/userinfo/", this.signupModel)
            .then(res => {
              console.log(res);
              if (res.status == 201) {
                this.$router.push({
                  name: "registerfinish",
                  params: { userID: res.data.userID }
                });
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