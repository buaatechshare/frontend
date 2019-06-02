<template>
<div>
    <br>
    <Form :model="formItem" :label-width="80">
        <FormItem label="论文题目">
            <Input v-model="paperModel.title" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="作者名称">
            <Input v-model="paperModel.author" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="DOI">
            <Input v-model="paperModel.DOI" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="出版机构">
            <Input v-model="paperModel.publisher" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="关键词">
            <Input v-model="paperModel.keywords" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="论文摘要">
            <Input v-model="paperModel.abstract" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="上传文件">
            <Upload
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>
        </FormItem>
        <FormItem>
            <Button type="primary">确认上传</Button>
            <Button style="margin-left: 8px">取消上传</Button>
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
