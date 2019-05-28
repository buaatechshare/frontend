<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <Input v-model="value11">
      <span slot="prepend">收信人</span>
    </Input>
    <br>
    <Input v-model="value6" type="textarea" :rows="8" placeholder="请输入正文"/>
    <br>
    <br>
    <Button type="primary" @click="modal1 = true">发送</Button>
    <Modal v-model="modal1" title="提示" @on-ok="ok">
      <br>
      <p>信件已发送。</p>
      <p>
        <br>
      </p>
    </Modal>
    <div class="ui horizontal divider"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal1: false
    };
  },
  methods: {
    ok() {
      this.$Message.info("message sent successfully.");
      this.$router.go(0);
    }
  }
};
</script>
    