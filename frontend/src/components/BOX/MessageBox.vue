<style>
.searchpapertitle {
  font-size: 20px;
  margin-bottom: 10px;
}
.searchpapercontent {
  font-size: 13px;
  color: grey;
  margin-bottom: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-break: break-all;
}
</style>
<template>
  <Row>
    <Card dis-hover style="border:0px">
      <div class="searchpapertitle">
        <a>{{message.senderName}}</a>
      </div>
      <br>
      <div class="searchpapercontent">{{message.content}}</div>
      <br>
      <div style="margin-top:5px;margin-bottom:5px">
        <sui-button size="mini" style="margin-right:5px" @click="handleRender(message)" circular>回复</sui-button>
      </div>
      <Divider style="margin-bottom:0px"/>
    </Card>
  </Row>
</template>

<script>
export default {
  name: "messageBox",
  data() {
    return {};
  },
  props: ["message"],
  methods: {
    handleRender: function(message) {
      //console.log("mudamudamuda!");
      //console.log(message.senderName)
      this.$router.push({name:'UserSendMessage',params: {receiverName: message.senderName}})
      /*this.$Modal.confirm({
        render: h => {
          
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "请输入回复"
            },
            on: {
              input: val => {
                this.value = val;
              }
            }
          });
        }
      });*/
    }
  }
};
</script>