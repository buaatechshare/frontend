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
            <Input v-model="loginModel.email" placeholder="Enter your email"></Input>
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
          <Button type="primary" @click="handleSubmit('loginModel')" long>login</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginView",
  data() {
    return {
      loginModel: {
        email: "",
        password: ""
      },
      ruleValidate: {},
      loginShow: true
    };
  },
  methods: {
    handleSubmit: function(loginModel) {}
  }
};
</script>
