<template>
  <div id="signupView">
    <div class="ui container horizontal">
      <div class="ui horizontal divider"></div>
      <Modal v-model="signupShow" style="width:540" :closable="false" :mask-closable="false">
        <h2 style="margin:10px;color:#abcdef;text-align:center">
          <sui-icon name="braille"></sui-icon>techshare
        </h2>
        <Form :model="signupModel" :rules="signupRule">
          <FormItem label="Name" prop="username">
            <Input v-model="signupModel.username"></Input>
          </FormItem>
          <FormItem label="Email" prop="username">
            <Input v-model="signupModel.username"></Input>
          </FormItem>
          <FormItem label="password" prop="username">
            <Input v-model="signupModel.username"></Input>
          </FormItem>
          <FormItem label="password*2" prop="username">
            <Input v-model="signupModel.username"></Input>
          </FormItem>
        </Form>
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
  }
};
</script>
