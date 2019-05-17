<template>
  <div id="index">
    <Menu mode="horizontal" theme="light" active-name="1">
      <MenuItem name="techshare" to="/papers">
        <sui-icon name="braille"></sui-icon>techshare
      </MenuItem>
      <MenuItem name="papers" to="/papers">
        <sui-icon name="file"></sui-icon>paper
      </MenuItem>
      <MenuItem name="patents" to="/patents">
        <sui-icon name="sticky note"></sui-icon>patent
      </MenuItem>
      <MenuItem style="float:right">
        <ButtonGroup>
          <Button :size="buttonSize" type="primary" @click="loginShow = true">login</Button>
          <Button :size="buttonSize" @click="signupShow=true">signup</Button>
        </ButtonGroup>
      </MenuItem>
      <MenuItem>
        <sui-input placeholder="Search..." icon="search"/>
      </MenuItem>
    </Menu>
    <!------- login view---->
    <Modal v-model="loginShow" title="Login" width="540">
      <Form ref="formValidate" :model="loginModel" :rules="ruleValidate" :label-width="80">
        <FormItem label="email" prop="email">
          <Input v-model="loginModel.email" placeholder="Enter your email"></Input>
        </FormItem>
        <FormItem label="password" prop="password">
          <Input v-model="loginModel.password" placeholder="Enter your password"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="handleSubmit('loginModel')">login</Button>
        <Button @click="register" style="float:left">signup</Button>
      </div>
    </Modal>

    <!--signup view-->

    <Modal v-model="signupShow" style="width:540">
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
      </Form>
      <div slot="footer">
        <Button type="primary" @click="handleRegister('signupModel')">signup</Button>
        <Button @click="login" style="float:left">login</Button>
      </div>
    </Modal>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "defaultindex",
  data() {
    return {
      loginShow: false,
      signupShow: false,
      loginModel: {
        email: "",
        password: ""
      },
      signupModel: {
        username: "",
        email: "",
        password: "",
        passwordDBL: "",
        phoneNumber: ""
      },
      signupRule: {}
    };
  },
  methods: {
    handleSubmit: function(loginModel) {
      // TODO submit the login form
    },
    handleRegister: function(signupModel) {
      // TODO: regist with info
    },
    register: function() {
      this.loginShow = false;
      this.signupShow = true;
    },
    login: function() {
      this.signupShow = false;
      this.loginShow = true;
    }
  },
  components: {}
};
</script>
