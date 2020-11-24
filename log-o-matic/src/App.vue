<template>
  <v-app>
    <v-app-bar
      app
      color="whitesmoke"
      light
    >
      <div class="d-flex align-center">
        <span class="display-1 mr-3"> Log-o-matic</span>

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-lock-open</v-icon>
        <span class="display-0 mr-2 col-1" >Sign in</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <WelcomeText/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import WelcomeText from './components/WelcomeText.vue';

export default Vue.extend({
  name: 'App',

  components: {
    WelcomeText,
  },

  data: () => ({
    //
  }),
});
</script>