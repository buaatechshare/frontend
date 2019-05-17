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
        </ButtonGroup>
      </MenuItem>
      <MenuItem>
        <sui-input placeholder="Search..." icon="search"/>
      </MenuItem>
    </Menu>
    <Modal v-model="loginShow" title="Login" width="540">
      <Form ref="formValidate" :model="loginForm" :rules="ruleValidate" :label-width="80">
        <FormItem label="email" prop="email">
          <Input v-model="loginForm.email" placeholder="Enter your email"></Input>
        </FormItem>
        <FormItem label="password" prop="password">
          <Input v-model="loginForm.password" placeholder="Enter your password"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="handleSubmit('loginForm')" style="float:right">login</Button>
        <Button to="/register" @click="loginShow=false">signup</Button>
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
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit: function(loginForm) {}
  },
  components: {}
};
</script>
