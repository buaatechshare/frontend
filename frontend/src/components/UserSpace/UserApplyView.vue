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
    <br>
    <p>申请理由</p>
    <Input v-model="reason" type="textarea" :rows="4" placeholder="nothing to show here"/>
    <p></p>
    <Button type="primary">提交</Button>
    <div class="ui horizontal divider"></div>
  </div>
</template>

<script>
export default {
  name: "paperBoxList",
  data() {
    return {
      name: "Skyvot",
      email: "test@buaa.edu.cn",
      reason: "nothing to show here."
    };
  }
};
</script>