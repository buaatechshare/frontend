<template>
  <sui-card class="raised">
    <sui-card-content>
      <sui-icon name="male"></sui-icon>
      {{patent.rightHolder}}
      <sui-card-meta slot="right">
        <sui-icon name="bell outline"></sui-icon>
      </sui-card-meta>
    </sui-card-content>
    <sui-card-content>
      <sui-card-header>{{patent.patentName}}</sui-card-header>
      <br>
      <div class="event">
        <div class="content">
          <div class="summary">{{patent.summary}}</div>
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
  name: "patentBox",
  props: ["patent"]
};
</script>