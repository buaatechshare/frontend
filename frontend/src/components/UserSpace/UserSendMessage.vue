<template>
  <div>
    <Input v-model="message">
      <span slot="prepend">收信人</span>
    </Input>
    <br>
    <Input v-model="message" type="textarea" :rows="8" placeholder="请输入正文"/>
    <br>
    <br>
    <Button type="primary" @click="modal = true">发送</Button>
    <Modal v-model="message" title="提示" @on-ok="ok">
      <br>
      <p>信件已发送。</p>
      <p>
        <br>
      </p>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    ok() {
      this.$Message.info("message sent successfully.");
      this.$router.go(0);
    }
  }
};
</script>
    