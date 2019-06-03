<template>
 <Form ref="formInline" :model="formInline" :rules="ruleInline" >
   <br>
        <FormItem prop="user">
            <Input v-model="userinfoModel.name">
              </Input>
        </FormItem>
        <FormItem prop="password">
            <Input v-model="userinfoModel.email">
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="submit()">提交修改</Button>
        </FormItem>
    </Form>
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
  methods:{
    submit:function(){
      axios.patch("/userinfo/"+this.$route.params.userID+"/", this.userinfoModel)
    }
  },
    //todo: click to submit changes. But currently no match interface.
  created() {
    axios
      .get("/userinfo/"+this.$route.params.userID+"/")
      .then(res => {
        console.log("yes");
        //console.log(this.$route.params.userID);
        console.log(res);
        this.userinfoModel.name = res.data.name;
        this.userinfoModel.email = res.data.email;
        //console.log(this.userinfoModel.name);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>