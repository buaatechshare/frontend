<template>
  <div>
    <br>
    <Form :model="formItem" :label-width="80">
      <FormItem label="论文题目">
        <Input v-model="Model.title" readonly></Input>
      </FormItem>
      <FormItem label="作者名称">
        <Input v-model="Model.author" readonly></Input>
      </FormItem>
      <FormItem label="DOI">
        <Input v-model="Model.doi" readonly></Input>
      </FormItem>
      <FormItem label="论文摘要">
        <Input
          v-model="Model.abstract"
          type="textarea"
          :autosize="{minRows: 4,maxRows: 8}"
          readonly
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="sourcepass">通过</Button>
        <Button style="margin-left: 8px" @click="sourcerefuse">拒绝</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Model: this.$route.query.source
    };
  },
  methods: {
    sourcepass() {
      axios
        .patch("/paperCheck/", {
          params: {
            id: this.Model.id,
            isCheck: true,
            isPass: false
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    sourcerefuse() {
      axios
        .patch("/paperCheck/", {
          params: {
            id: this.Model.id,
            isCheck: true,
            isPass: false
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
