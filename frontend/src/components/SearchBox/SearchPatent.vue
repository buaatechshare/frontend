<style>
.searchpatenttitle {
  font-size: 20px;
  margin-bottom: 10px;
}
.searchpatentcontent {
  font-size: 13px;
  color: grey;
  margin-bottom: 3px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-break: break-all;
}
</style>
<template>
  <Row>
    <Card dis-hover style="border:0px">
      <div class="searchpatenttitle">
        <a>蛙人助推器</a>
      </div>
      <div
        class="searchpatentcontent"
      >通过对近年来有关慢性疲劳综合征文献的回顾，总结传统中医药对慢性疲劳综合征病因病机、辨证施治、针灸治疗、抗疲劳的单味中药研究概况。传统中医药近年来对慢性疲劳综合征的研究以整体观为指导同时针对个体特点，多从脏腑、气血津液论治，也可辨证施以针灸治疗，并通过实验研究总结出不少具有抗疲劳的单杀中药。</div>
      <div name="searchpatentauthor">
        <div style="color: black;font-size: 12px;">
          发明人:
          <a style="color:black">王开娜</a>
        </div>
        <div style="color: black;font-size: 12px;">
          申请人:
          <a style="color:black">李永峰</a>
        </div>
      </div>
      <div style="margin-top:5px;margin-bottom:5px">
        <sui-button icon="star outline" size="mini" style="margin-right:5px" circular>收藏</sui-button>
        <sui-button icon="linkify" size="mini" style="margin-right:5px" circular>引用</sui-button>
        <sui-button icon="share" size="mini" style="margin-right:5px" circular>分享</sui-button>
      </div>
      <Divider style="margin-bottom:0px"/>
    </Card>
  </Row>
</template>
<script>
export default {};
</script>
