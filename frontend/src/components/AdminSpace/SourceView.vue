<template>
<div>
    <br>
    <Form :model="formItem" :label-width="80">
        <FormItem label="论文题目">
            <Input v-model="paperModel.title" readonly></Input>
        </FormItem>
        <FormItem label="作者名称">
            <Input v-model="paperModel.author" readonly></Input>
        </FormItem>
        <FormItem label="DOI">
            <Input v-model="paperModel.DOI" readonly></Input>
        </FormItem>
        <FormItem label="出版机构">
            <Input v-model="paperModel.publisher" readonly></Input>
        </FormItem>
        <FormItem label="关键词">
            <Input v-model="paperModel.keywords" readonly></Input>
        </FormItem>
        <FormItem label="论文摘要">
            <Input v-model="paperModel.abstract" type="textarea" :autosize="{minRows: 4,maxRows: 8}" readonly></Input>
        </FormItem>
        
        <FormItem>
            <Button type="primary">通过</Button>
            <Button style="margin-left: 8px">拒绝</Button>
        </FormItem>
    </Form>
</div>
</template>
<script>
    export default {
        data () {
            return {
                paperModel: {
                    title:"",
                    author:"",
                    DOI:"",
                    keywords:[],
                    abstract:""
                }
            }
        }
    }
</script>
