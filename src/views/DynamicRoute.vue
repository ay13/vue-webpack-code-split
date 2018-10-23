<template>
  <div class="dynamic-route">
    <h1>This is a dynamic route page</h1>
    <button @click="show = true">Show more content</button>
    <!-- <component :is="loadMore" v-if="show" /> -->
    <load-more v-if="show" />
  </div>
</template>
<script>
// const LoadMore = () =>
//   import(/* webpackChunkName: "load-more", webpackPrefetch: true */ "@/components/LoadMore.vue");

export default {
  components: {
    LoadMore: () =>
      import(/* webpackChunkName: "load-more", webpackPrefetch: true */ "@/components/LoadMore.vue")
  },
  data() {
    return {
      show: false
    };
  }
  // computed: {
  //   loadMore() {
  //     return () => import(/* webpackChunkName: "load-more" */ "@/components/LoadMore.vue");
  //   }
  // }
};
</script>
