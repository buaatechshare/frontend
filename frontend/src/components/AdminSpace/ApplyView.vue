<template>
  <div class="ui container horizontal">
    <div class="ui horizontal divider"></div>
    <Input v-model="Model.realName" style="width: 400px" readonly>
      <span slot="prepend">Name:</span>
    </Input>
    <br>
    <Input v-model="Model.constitution" style="width: 400px" readonly>
      >
      <span slot="prepend">Constitution:</span>
    </Input>
    <br>
    <p>申请理由</p>
    <Input v-model="Model.introduction" type="textarea" :rows="4" readonly/>
    <p></p>
    <Button type="primary" @click="applypass">通过</Button>
    <Button style="margin-left: 8px" @click="applyrefuse">拒绝</Button>
    <div class="ui horizontal divider"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "userApplyView",
  data() {
    return {
      Model: this.$route.query.apply,
      sendapplymodel: {
        formID: "",
        isCheck: true,
        isPass: true
      }
    };
  },
  methods: {
    applypass() {
      this.sendapplymodel.formID=this.Model.formID;
      axios
        .patch("/application/" + this.Model.formID + "/", this.sendapplymodel)
        .then(res => {
          console.log(res);
          if(res.status == 200){
            this.$Message.info("审核提交成功");
          };
        })
        .catch(err => {
          console.error(err);
        });
    },
    applyrefuse() {
      this.sendapplymodel.formID=this.Model.formID;
      this.sendapplymodel.isPass=false;
      axios
        .patch("/application/"+ this.Model.formID + "/",this.sendapplymodel)
        .then(res => {
          console.log(res);
          if(res.status == 200){
            this.$Message.info("审核提交成功");
          };
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>