<template>
  <v-container>
    <div>
        <v-data-table
        hide-default-footer
        :headers="headers"
        :items="teachers"
        item-key="name"
        class="elevation-1">
    
        <template v-slot:top>
            <v-col class="">
            <h1 class="display-1 font-weight-bold">
            Teachers
            </h1>
            </v-col>
        </template>


        <template v-slot:[`item.password`]="{ item }">
            <v-row>
            <v-text-field
            type="text"
            v-model.number="item.password" label="Password"
            item-key="password">
            </v-text-field>
            <v-btn color="blue" class="white--text rounded-0" @click="updatePassword(item)">Reset</v-btn>
            </v-row>
        </template>
        </v-data-table>
        
        <v-card>
        <v-card-subtitle>Add New Teacher</v-card-subtitle>
                <v-row class="ma-1">
                    <v-text-field label="Email" v-model="email"></v-text-field>
                    <v-text-field label="Name" v-model="name"></v-text-field>
                    <v-text-field label="Password" v-model="password"></v-text-field>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="green"
                    elevation="2"
                    class="ma-2 white--text"
                    @click="createUser({email:email, name:name, password:password})"
                    >CREATE</v-btn>
                </v-row>
        </v-card>     
    </div>
     <v-divider color="black"></v-divider>
  <Students/>
  </v-container>
</template>

<script lang="ts">

  import Students from '@/components/Students.vue';

  export default {
    data () {
      return {
        name: '',
        email: '',
        password: '',
        teachers: this.$store.state.teachers,
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
        
            value:'password'
              
          }
        ]
      },
    },
    methods: {
      updatePassword (arg:any):void {
        this.$store.commit('updateTeacherPassword', {id: arg.id, newPassword: arg.password})
      },
      createUser (arg:any):void {
        this.$store.commit('createTeacher',{email: arg.email, name: arg.name, password: arg.password})
      }
    },
    components: {
        Students
    },

}
  
</script>