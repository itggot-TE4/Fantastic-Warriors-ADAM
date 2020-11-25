<template>
  <v-app>
    <v-app-bar app color="whitesmoke" light>
      <div class="d-flex align-center">
        <span class="display-1 mr-3"> Log-o-matic</span>
      </div>

      <v-spacer></v-spacer>

      <router-link to="Login">
        <v-btn>
          <v-icon>mdi-lock-open</v-icon>
          <span class="display-0 mr-2 col-1">Sign in</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
});
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>