<template>
     <v-card>

        <v-data-table
        hide-default-footer
        :headers="headers"
        :items="students"
        item-key="name"
        class="elevation-1">
    
        <template v-slot:top>
            <v-col class="">
            <h1 class="display-1 font-weight-bold">
            Students
            </h1>
            </v-col>
        </template>
    
        <template v-slot:item.teacher="{ item }">  
         <v-select 
                @input="log"
                :items="teachers"
                v-bind:value="item.teacher"> 
            </v-select>
        </template>

        <template v-slot:[`item.password`]="{ item }">
            <v-row>
            <v-text-field
            type="text"
            v-model.number="item.password" label="Password"
            item-key="password">
            </v-text-field>
            <v-btn color="blue" class="white--text rounded-0">Reset</v-btn>
            </v-row>
        </template>
        </v-data-table>
        
        <v-card>
        <v-card-subtitle>Add New Student</v-card-subtitle>
                <v-row class="ma-1">
                    <v-text-field label="Email"></v-text-field>
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="Password"></v-text-field>
                    <v-text-field label="Teacher"></v-text-field>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="green"
                    elevation="2"
                    class="ma-2 white--text"
                    >CREATE</v-btn>
                </v-row>
        </v-card>     
    </v-card>
</template>

<script lang="ts">
  export default {
      name: 'Students',
    data: function () {
      return {
        // name: '',
        // email: '',
        // password: '',
        // teacher: ''
      teachers: this.$store.getters.teacherNames,
      students: this.$store.state.students
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
            text: 'Teacher',
            value:'teacher'
          },
          {
        
            value:'password'
              
          }
        ]
      },
    },
    methods: {
      log (teacher) {
        console.log(teacher)
      }
    },
  }
</script>