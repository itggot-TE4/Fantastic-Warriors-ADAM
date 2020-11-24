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
        <v-card-text min-width="550px"> 
          <v-text-field color="white" label="Name" v-model="name" >
          </v-text-field>
          <v-text-field color="white" label="password" v-model="password">
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
    }
    
}
</script>
<style>
.v-application--wrap {
    min-height: 100vh;
    position: relative;
    max-width: 60vw;
    margin-left: 10vw;
    min-width: 400px;
}
    
</style>