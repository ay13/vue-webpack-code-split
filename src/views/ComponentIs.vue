<template>
  <div>
    <h2>Component Is</h2>
    <label for="menu-mobile">Mobile Menu</label>
    <input type="radio" name="menu" id="menu-mobile" v-model="menu" value="Mobile" >
    <br>
    <label for="menu-desktop">Desktop Menu</label>
    <input type="radio" name="menu" id="menu-desktop" v-model="menu" value="Desktop">
    <component :is="whichMenu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: ""
    };
  },
  computed: {
    whichMenu() {
      if (!this.menu) {
        return null;
      }
      return () =>
        import(/* webpackChunkName: "menu" */ `@/components/Menu${this.menu}`);
    }
  }
};
</script>

<style>
</style>
