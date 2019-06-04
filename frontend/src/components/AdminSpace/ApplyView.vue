<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <Input v-model="applyModel.name" style="width: 400px" readonly>
      <span slot="prepend">Name:</span>
    </Input>
    <br>
    <Input v-model="applyModel.email" style="width: 400px" readonly>
      >
      <span slot="prepend">Email:</span>
    </Input>
    <br>
    <p>申请理由</p>
    <Input v-model="applyModel.reason" type="textarea" :rows="4" readonly/>
    <p></p>
    <Button type="primary">通过</Button>
    <Button style="margin-left: 8px">拒绝</Button>
    <div class="ui horizontal divider"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "userApplyView",
};
</script>