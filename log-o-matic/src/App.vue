<template>
  <v-app>
    <v-app-bar app color="whitesmoke" light>
      <div class="d-flex align-center">
        <span class="display-1 mr-3"> Log-o-matic</span>
      </div>

      <v-spacer></v-spacer>

      <router-link to="Admin" v-if="isAdmin">
        <v-btn elevation="0">
          <v-icon>mdi-cog</v-icon>
          <span>Admin</span>
        </v-btn>
      </router-link>

       <router-link to="">
        <v-btn elevation="0">
          <v-icon>mdi-format-list-checkbox</v-icon>
          <span>Logs</span>
        </v-btn>
      </router-link>

      <router-link to="Login">
        <v-btn elevation="0">
          <v-icon>mdi-lock-open</v-icon>
          <span>Sign in</span>
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
  methods: {
    isAdmin () {
      // logic for determining adming status
      return true
    }

  }
});
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>