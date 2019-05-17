<template>
  <sui-card>
    <sui-card-content>
      <sui-icon name="male"></sui-icon>Elliot
      <sui-card-meta slot="right">
        <sui-icon name="bell outline"></sui-icon>
      </sui-card-meta>
    </sui-card-content>
    <sui-card-content>
      <sui-card-header>patent name</sui-card-header>
      <div class="event">
        <div class="content">
          <div
            class="summary"
          >Domain adaptation allows knowledge from a source domain to be transferred to a different but related target domain. Intuitively, discovering a good feature representation across domains is crucial. In this paper, we first propose to find such a representation through a new learning method, transfer component analysis (TCA), for domain adaptation.</div>
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
  name: "patentBox"
};
</script>