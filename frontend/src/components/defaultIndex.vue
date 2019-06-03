<template>
  <div id="index">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="techshare" to="/papers" style="width: 230px;text-align:center;font-size:22px">
        <sui-icon name="braille"></sui-icon>techshare
      </MenuItem>
      <MenuItem name="papers" to="/papers">
        <sui-icon name="file"></sui-icon>paper
      </MenuItem>
      <MenuItem name="patents" to="/patents">
        <sui-icon name="sticky note"></sui-icon>patent
      </MenuItem>
      <MenuItem style="float:right">
        <ButtonGroup>
          <Button :size="buttonSize" type="primary" to="/login">login</Button>
          <Button :size="buttonSize" to="/register">signup</Button>
        </ButtonGroup>
      </MenuItem>
      <MenuItem style="width: 40%">
        <Input search placeholder="Search..." @on-search="SearchFunction()" v-model="keywords"/>
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "defaultindex",
  data() {
    return {
      keywords: ""
    };
  },
  methods: {
    SearchFunction() {
      this.$router.push({
        name: "searchresult",
        params: { keywords: this.keywords }
      });
    }
  },
  components: {},
  provide() {
    return {
      keywords: this.keywords
    };
  }
};
</script>
