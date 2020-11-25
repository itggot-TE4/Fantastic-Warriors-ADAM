<template>
  <v-container>
    <div>
        <v-data-table
        :headers="headers"
        :items="teachers"
        item-key="name"
        class="elevation-1"
        >

    
        <template v-slot:top>
            <v-col class="">
            <h1 class="display-1 font-weight-bold">
            Teachers
            </h1>
        </v-col>
        </template>
        </v-data-table>
    </div>
  </v-container>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        name: '',
        email: '',
        teachers: [
          {
            name: 'Daniel',
            email: 'daniel.berg@ga.ntig.se',
            
            
          },
          {
            name: 'Linus',
            email: 'linus.styren@ga.ntig.se'
          },
          {
            name: ''
          },
          {
            name: ''
          },
          {
            name: ''
          },
          {
            name: ''
          },
          {
            name: ''
          },
          {
            name: ''
          },
          {
            name: ''
          },
          {
            name: '',

          },
        ],
      }
    },
    computed: {
      headers () {
        return [
          {
            text: 'Email',
            align: 'start',
            value: 'email',
          },
          {
            text: 'Name',
            value: 'name',
          },
          {
              
          }
        ]
      },
    },
    methods: {
      
    },
  }
</script>