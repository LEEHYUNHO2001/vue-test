<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeView from "@/components/Home/HomeView.vue";

@Component({
  components: {
    HomeView,
  },
})
export default class LoginPage extends Vue {}
</script>
