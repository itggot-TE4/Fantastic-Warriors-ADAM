<template>
  <v-container>
    <div id="app">
      <v-app id="inspire">
        <v-card class="overflow-hidden" color="gray">
          <v-toolbar flat color="gray">
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">
              User Profile
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-text-field color="white" prepend-inner-icon="mdi-account-circle" label="Name" v-model="name">
            </v-text-field>
            <v-text-field color="white" prepend-inner-icon="mdi-lock" label="password" v-model="password">
            </v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="signIn"> Sign in </v-btn>
          </v-card-actions>
        </v-card>
      </v-app>
    </div>
  </v-container>
</template>

<script lang="ts">
// import LoginForum from '@/components/LoginForum.vue';

export default {
  components: {
    // LoginForum,
  },
};
</script>
<style>
.v-application--wrap {
  max-width: 70%;
  margin: 0 auto;
}
</style>
