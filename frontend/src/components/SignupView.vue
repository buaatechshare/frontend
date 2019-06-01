<template>
  <div id="signupView">
    <!--signup view-->
    <img src="../assets/bg.jpg" style="width:100% ">
    <div>
      <Modal v-model="signupShow" style="width:800px" :closable="false" :mask-closable="false">
        <h2 style="margin:10px;color:#abcdef;text-align:center">
          <sui-icon name="braille"></sui-icon>techshare
        </h2>
        <Form :model="signupModel" :rules="signupRule">
          <FormItem label="Name" prop="username">
            <Input v-model="signupModel.name"></Input>
          </FormItem>
          <FormItem label="Email" prop="email">
            <Input v-model="signupModel.email"></Input>
          </FormItem>
          <FormItem label="phone" prop="phone">
            <Input v-model="signupModel.phone"></Input>
          </FormItem>
          <FormItem label="password" prop="password">
            <Input v-model="signupModel.password"></Input>
          </FormItem>
          <FormItem label="password*2" prop="passwordDBL">
            <Input v-model="signupModel.passwordDBL"></Input>
          </FormItem>
          <FormItem>
            <ButtonGroup>
              <Button type="primary" to="/papers">cancel</Button>
              <Button to="/login" style="float:left">login</Button>
            </ButtonGroup>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" @click="handleRegister()" long>signup</Button>
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
    return {
      signupModel: {
        name: "",
        email: "",
        password: "",
        phone: ""
      },
      signupRule: {},
      signupShow: true
    };
  },
  methods: {
    handleRegister: function() {
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
    }
  }
};
</script>