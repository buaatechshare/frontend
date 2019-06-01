<template>
  <div style="margin-top:30px">
    <Form :model="application" :label-width="80">
      <FormItem label="姓名">
        <Input v-model="application.name"/>
      </FormItem>
      <FormItem label="机构">
        <Input v-model="application.institution"/>
      </FormItem>
      <FormItem label="申请内容">
        <Input v-model="application.content" type="textarea" :rows="8"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="send">申请</Button>
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
        content: "",
        name: "",
        institution: ""
      }
    };
  },
  beforeCreate() {
    axios
      .get("/userinfo/{}", {
        params: {
          userID: this.$route.params.userID
        }
      })
      .then(res => {
        //console.log("yes");
        //console.log(this.$route.params.userID);
        this.application.name = res.data.username;
        console.log(this.applyModel.name);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>