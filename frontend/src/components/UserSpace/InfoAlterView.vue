<template>
  <div>
    <br>
    <Input v-model="userinfoModel.name" style="width: 400px">
      <span slot="prepend">Name:</span>
    </Input>
    <br>
    <Input v-model="userinfoModel.email" style="width: 400px">
      <span slot="prepend">Email:</span>
    </Input>
    <br>
    <Button type="primary" >提交修改</Button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "infoAlterView",
  data() {
    return {
      userinfoModel: {
        email: "",
        name: ""
      }
    };
  },
    //todo: click to submit changes. But currently no match interface.
  created() {
    axios
      .get("/userinfo/"+this.$route.params.userID)
      .then(res => {
        console.log("yes");
        //console.log(this.$route.params.userID);
        this.userinfoModel.name = res.data.username;
        this.userinfoModel.email = res.data.email;
        console.log(this.userinfoModel.name);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>