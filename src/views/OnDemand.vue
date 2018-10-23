<template>
  <div class="dynamic-route">
    <h1>This page loads only the bundles necissary for the content</h1>
    <!-- <component :is="loadOnDemand" /> -->
    <on-demand-content />
  </div>
</template>
<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
// import OnDemandContent from "@/components/OnDemandContent.vue";
const OnDemandContent = () => ({
  component: import(/* webpackChunkName: "on-demand-content" */ "@/components/OnDemandContent.vue"),
  loading: LoadingSpinner
});
// import(/* webpackChunkName: "on-demand-content" */ "@/components/OnDemandContent.vue");

export default {
  components: {
    OnDemandContent
  }
  // computed: {
  //   loadOnDemand() {
  //     return () => import(/* webpackChunkName: "on-demand-content" */ "@/components/OnDemandContent.vue");
  //   }
  // }
};
</script>
