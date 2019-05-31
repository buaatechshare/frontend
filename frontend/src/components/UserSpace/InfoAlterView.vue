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
  beforeCreate() {
    axios
      .get("/userinfo/{}",{
        params:{
          'userID':123
        }
      })
      .then(res => {
        console.log("yes");
        this.userinfoModel.name = res.data.username;
        this.userinfoModel.email = res.data.email;
        console.log(this.name);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>