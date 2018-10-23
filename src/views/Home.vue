<template>
  <div class="home">
    <p>Code splitting a Vue.js project is much easier than you think. The most common way of importing components is to use a pattern like:</p>
    <prism language="javascript">{{ code }}</prism>
    <p>When you import a componenet this way it is included in the main app bundle. </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {

  },
  data() {
    return {
      code: `import HelloWorld from "@/components/HelloWorld.vue"`
    }
  },
};
</script>
