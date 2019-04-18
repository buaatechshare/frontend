<template>
  <!-- <div class="ui huge card">
    <div class="content">
      <div class="right floated meta">14h</div>
      <img class="ui avatar image" src="../assets/avatar.png"> Elliot
      
    </div>
    <div class="content">
        <div class="ui container">
        <P>
          Install the full Semantic UI package. Semantic UI includes Gulp build tools so your project can preserve its own theme changes, allowing you to customize the style variables.
          Detailed documentation on theming in Semantic UI is provided here.
        </P>
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        <i class="heart outline like icon"></i>
        17 likes
      </span>
      <i class="comment icon"></i>
      3 comments
    </div>
  </div>-->
  <div class="ui raised segment">
    <div class="ui vertical segment">
      <img class="ui avatar image" src="../assets/avatar.png"> Elliot
      <button class="ui basic button" style="float:right">
        <i class="user icon"></i>
        follow
      </button>
    </div>
    <div class="ui vertical segment">
      <h4 class="ui header">Domain Adaptation via Transfer Component Analysis</h4>
      <p>Domain adaptation solves a learning problem in a target domain by utilizing the training data in a dif- ferent but related source domain. Intuitively, dis- covering a good feature representation across do- mains is crucial. In this paper, we propose to find such a representation through a new learn- ing method, transfer component analysis (TCA), for domain adaptation.</p>
    </div>
    <div class="ui vertical segment">
      <i class="heart outline icon"></i> like
      <span class="right floated" style="float:right">
        <i class="bookmark outline icon"></i>
        bookmark
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PushBox"
};
</script>