<template>
  <div class="home">
      <WelcomeText/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WelcomeText from '@/components/WelcomeText.vue'; // @ is an alias to /src

@Component({
  components: {
    WelcomeText,
  },
})
export default class Home extends Vue {}
</script>
