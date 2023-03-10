<template>
  <div id="app">
    <LoginView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginView from "@/components/Login/LoginView.vue";

@Component({
  components: {
    LoginView,
  },
})
export default class LoginPage extends Vue {}
</script>
