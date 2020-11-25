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
            <v-btn color="success" @click="signIn(name,password)"> Sign in </v-btn>
          </v-card-actions>
        </v-card>
      </v-app>
    </div>
  </v-container>
</template>

<script lang="ts">
  export default {
    components: {
    },
    // there is 99.9% chance a better way to do this
    methods: {
      signIn (name, password) {
        const registeredUsers = this.$store.state.registeredUsers
        let loggedIn = false
        registeredUsers.forEach(registeredUser => {
          // 2 checks to reduce total number of checks
          // better would be to retrieve all where (name) from database and then check length and password of result
          if (name === registeredUser.name) {
            if (password === registeredUser.password) {
              loggedIn = true
              this.$store.commit('updateCurrentUser', name)
              // TODO: send to correct route
              this.$router.push('/about')
            }
          } 
        })
        if (!loggedIn) {
          alert("incorrect username and/or password")
        }
      }
    }  
  }
</script>
<style>
.v-application--wrap {
  max-width: 70%;
  margin: 0 auto;
}
</style>
