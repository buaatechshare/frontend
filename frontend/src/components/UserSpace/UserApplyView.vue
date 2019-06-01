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
export default {
  name: "userApplyView",
  data() {
    return {
      application: {
        name: "",
        content: "",
        institution: ""
      }
    };
  }
};
</script>