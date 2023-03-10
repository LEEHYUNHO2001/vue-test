<template>
  <div class="hello">
    <header>
      <h1 class="title">{{ msg }}</h1>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeView extends Vue {
  msg: string = "HomeView";
}
</script>
