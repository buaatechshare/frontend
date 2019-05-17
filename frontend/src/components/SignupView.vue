<template>
  <div id="signupView">
    <model v-model="signupModel"></model>
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
        passwordDBL: ""
      }
    };
  }
};
</script>
