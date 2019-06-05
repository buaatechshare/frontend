<template>
  <div style="margin-top:30px">
    <Form :model="application" :label-width="80">
      <FormItem label="姓名">
        <Input v-model="application.realName"/>
      </FormItem>
      <FormItem label="机构">
        <Input v-model="application.constitution"/>
      </FormItem>
      <FormItem label="申请内容">
        <Input v-model="application.introduction" type="textarea" :rows="8"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="send()">申请</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "userApplyView",
  data() {
    return {
      application: {
        introduction: "",
        realName: "",
        constitution: "",
        userID: this.$route.params.userID
      }
    };
  },
  methods:{
    send: function(){
      console.log(this.application);
      axios
      .post("/application/",this.application)
      .then(res=>{
        console.log(res);
        if(res.status == 201)
        {
          this.application.introduction="";
          this.application.realName="";
          this.application.constitution="";
          this.$Message.info("申请表单提交成功！");
          //this.$router.go(0);
        }
        else{
          this.$Message.info("表单提交失败");
        }
      })
    }
  }
};
</script>