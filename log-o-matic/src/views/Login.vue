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
    data () {
      return {
        name: '',
        password: ''
      }
    },
    components: {
    },
    // there is 99.9% chance a better way to do this
    methods: {
      signIn (name:string, password:string): void {
        const registeredUsers = this.$store.getters.users
        // let loggedIn = false
        const loggedIn = registeredUsers.find(user => user.email === name || user.name === name && user.password === password)
        if (loggedIn) {
          this.$store.commit('updateCurrentUser', loggedIn.permToken)
          // TODO: send to correct route
          this.$router.push('/Logs')
        } else {
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
