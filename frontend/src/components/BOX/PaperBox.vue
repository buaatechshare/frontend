<template>
  <sui-card @click="jump(paper)">
    <sui-card-content>
      <sui-icon name="male" ></sui-icon>
      {{paper.author}}
      <sui-card-meta slot="right">
        <sui-icon name="bell outline"></sui-icon>
      </sui-card-meta>
    </sui-card-content>
    <sui-card-content>
      <sui-card-header>{{paper.paperName}}</sui-card-header>
      <br>
      <div class="event">
        <div class="content">
          <div class="summary">{{paper.abstract}}</div>
        </div>
      </div>
    </sui-card-content>
    <sui-card-content extra>
      <span slot="right">
        <sui-icon name="heart outline"/>
      </span>
      <sui-icon name="expand arrows alternate"></sui-icon>details
    </sui-card-content>
  </sui-card>
</template>

<script>
export default {
  name: "paperBox",
  data() {
    return {};
  },
  methods: {
    jump: function(paper){
      //this.$Message.info("Yes!!!!");
      if(this.$route.params.userID){
        //console.log("yes");
        //console.log(paper.resourceID);
        this.$router.push({name:'Upaperview',params:{resourceID:paper.resourceID}});
      }
      else{
        //console.log("yes");
        //console.log(paper.resourceID);
        this.$router.push({name:'paperview',params:{resourceID:paper.resourceID}});
      }
    }
  },
  props: ["paper"]
};
</script>