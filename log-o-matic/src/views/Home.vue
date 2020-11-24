<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcometext from '@/components/WelcomeText.vue'; // @ is an alias to /src

@Component({
  components: {
    Welcometext,
  },
})
export default class Home extends Vue {}
</script>
