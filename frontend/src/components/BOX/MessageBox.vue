<template>
  <sui-card>
    <sui-card-content>
      <sui-icon name="male"></sui-icon>
      {{message.senderName}}
      <sui-card-meta slot="right">
        <sui-icon name="bell outline"></sui-icon>
      </sui-card-meta>
    </sui-card-content>
    <sui-card-content>
      <div class="event">
        <div class="content">
          <div class="summary">{{message.content}}</div>
        </div>
      </div>
    </sui-card-content>
    <sui-card-content extra>
      <p>
        <Button @click="handleRender">回复</Button>
      </p>
    </sui-card-content>
  </sui-card>
</template>

<script>
export default {
  name: "messageBox",
  data() {
    return {};
  },
  props: ["message"],
  methods: {
    handleRender() {
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "Please enter your reply..."
            },
            on: {
              input: val => {
                this.value = val;
              }
            }
          });
        }
      });
    }
  }
};
</script>