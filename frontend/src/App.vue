<template>
<html>
  <head>
    <meta charset="utf-8">
    <title>techshare platform</title>
  </head>
  <body id="root">
    <div class="ui tablet computer only padded grid">
      <div class="ui top fixed borderless fluid huge inverted menu">
        <div class="ui container">
          <a class="header item">techshare</a>
          <div class="right menu">
            <div class="item">
              <form class="ui form">
                <div class="inline fields">
                  <div class="field">
                    <button class="ui blue button">Sign in</button>
                  </div>
                  <div class="field">
                    <button class="ui green button">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ui massive inverted message">
      <div class="ui container">
        <h1 class="ui header"></h1>
      </div>
    </div>

    <div class="ui container">
      <div class="ui center aligned basic segment">
        <div class="ui left icon action input">
          <i class="search icon"></i>
          <input type="text" placeholder="search paper">
          <div class="ui blue submit button">Search</div>
        </div>
      </div>
      <div class="ui horizontal divider">Papers</div>
      <div class="ui two column doubling stackable grid container">
        <div class="column">
          <push-box></push-box>
          <push-box></push-box>
        </div>
        <div class="column">
          <push-box></push-box>
          <push-box/>
        </div>
      </div>
    </div>
  </body>
</html>
</template>

<script>
import PushBox from "./components/PushBox.vue";

export default {
  name: "app",
  components: {
    PushBox
  }
};
</script>

