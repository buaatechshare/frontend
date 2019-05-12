<template>
  <div style="background:#fff;padding: 20px">
    <Card :bordered="false">
      <span>
        <div style="float:left;font-family:PingFang SC;font-size:25px">Title</div>
        <div style="float:right;">
          <!-- 收藏 -->
          <Button shape="circle" icon="ios-pricetag-outline"></Button>
        </div>
      </span>
      <Divider dashed/>
      <span>
        <div style="float:left;font-family:PingFang SC;font-size:16px">Author</div>
        <div style="float:right;">
          <!-- 关注 -->
          <Button outline="none" shape="circle" icon="ios-heart-outline"></Button>
        </div>
      </span>
      <Divider/>
      <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
    </Card>
  </div>
</template>
<script>
export default {};
</script>
