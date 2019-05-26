<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <Input v-model="name" style="width: 400px">
      <span slot="prepend">Name:</span>
    </Input>
    <br>
    <Input v-model="email" style="width: 400px">
      <span slot="prepend">Email:</span>
    </Input>
    <div class="ui horizontal divider"></div>
  </div>
</template>

<script>
export default {
  name: "infoAlterView",
  data() {
    return {
      name: "Skyvot",
      email: "test@buaa.edu.cn"
    };
  }
};
</script>