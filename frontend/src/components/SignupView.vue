<template>
  <div id="signupView">
    <!--signup view-->
    <img src="../assets/bg.jpg" style="width:100% ">
    <div style="margin-top:100px">
      <Modal v-model="signupShow" style="width:540" :closable="false" :mask-closable="false">
        <h2 style="margin:10px;color:#abcdef;text-align:center">
          <sui-icon name="braille"></sui-icon>techshare
        </h2>
        <Form :model="signupModel" :rules="signupRule">
          <FormItem label="Name" prop="username">
            <Input v-model="signupModel.username"></Input>
          </FormItem>
          <FormItem label="Email" prop="email">
            <Input v-model="signupModel.email"></Input>
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
          <Button type="primary" @click="handleRegister('signupModel')" long>signup</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
export default {
  name: "signupView",
  data() {
    return {
      signupModel: {
        username: "",
        email: "",
        password: "",
        passwordDBL: "",
        phoneNumber: ""
      },
      signupRule: {},
      signupShow: true
    };
  },
  methods: {
    handleRegister: function(signupModel) {
      this.$router.push({ name: "registerfinish", params: { userID: "123" } });
    }
  }
};
</script>