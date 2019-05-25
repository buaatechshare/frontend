<style>
.Tags {
  width: 70px;
  height: 30px;
  font-size: 13px;
}
.Tagfont {
  line-height: 30px;
}
</style>
<template>
  <div style="text-align:center">
    <div style="margin-top:150px;margin-bottom:50px;">
      <Input
        search
        enter-button="Search"
        placeholder="Enter something..."
        style="width:500px;margin:0 auto"
        @on-search="TagSearch()"
      />
    </div>
    <div style="color:grey;">请选择感兴趣的主题：</div>
    <div>
      <Tag checkable color="primary" class="Tags">
        <div class="Tagfont">标签一</div>
      </Tag>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    TagSearch() {}
  }
};
</script>
