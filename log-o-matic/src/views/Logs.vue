<template>
  <div>
    <v-card>
    <Logs/>
    </v-card>
    <v-divider></v-divider>
    <v-card>
      <v-container>
    <v-data-table
        hide-default-footer
        :headers="headers"
        :items="otherstudentdata"
        class="elevation-1">
    
        <template v-slot:top>
            <v-col class="">
            <h1 class="display-1 font-weight-bold">
            All other Students
            </h1>
            </v-col>
        </template>
    
        
        <template v-slot:[`item.monday`]="{ item }"> 
            <v-icon large v-if = "item.monday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.monday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.monday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.tuesday`]="{ item }"> 
            <v-icon large v-if = "item.tuesday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.tuesday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.tuesday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.wednesday`]="{ item }"> 
            <v-icon large v-if = "item.wednesday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.wednesday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.wednesday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.thursday`]="{ item }"> 
            <v-icon large v-if = "item.thursday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.thursday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.thursday.data }} </span>
              </template>
              <v-icon large>mdi-check</v-icon>
            </v-badge>
        </template>
        <template v-slot:[`item.friday`]="{ item }"> 
            <v-icon large v-if = "item.friday.data == null " color="warning">mdi-alert-circle</v-icon>
            <v-icon large v-else-if= "item.friday.data == 0" color="primary">mdi-check</v-icon>
            <v-badge v-else>
              <template v-slot:badge>
                <span>{{ item.friday.data }} </span>
              </template>
              <v-icon large >mdi-check</v-icon>
            </v-badge>
        </template> 


        </v-data-table>
 </v-container> 
    </v-card>
    
  </div>
</template>

<script>
import Logs from '@/components/Logsforum.vue';
export default {
     components: {
        Logs
    },
    data: function () { 
        return {
    otherstudentdata: [
          {
            student: 'Lasse',
            id: 1,
            monday: {status: false, data: null},
            tuesday: {status: true, data: 0},
            wednesday: {status: true, data: 3},
            thursday: {status: false, data: null},
            friday: {status: true, data: 0}
        },
        {
            student: 'Åberg',
            id: 2,
            monday: {status: true, data: 0},
            tuesday: {status: true, data: 2},
            wednesday: {status: false, data: null},
            thursday: {status: true, data: 2},
            friday: {status: true, data: 0}
        },
        {
            student: 'Cocholate',
            id: 3,
            monday: {status: false, data: null},
            tuesday: {status: true, data: 0},
            wednesday: {status: true, data: 3},
            thursday: {status: false, data: null},
            friday: {status: true, data: 0}
        },
        {
            student: 'Mocca',
            id: 4,
            monday: {status: true, data: 1},
            tuesday: {status: true, data: 0},
            wednesday: {status: true, data: 3},
            thursday: {status: true, data: 3},
            friday: {status: true, data: 0}
        },   
      ],
    }
  },
  
  computed: {
      headers () {
        return [
          {
            text: 'Student',
            align: 'start',
            value: 'student',
          },
          {
            text: 'Monday',
            value: 'monday',
          },
          {
            text: 'Tuesday',
            value:'tuesday'
          },
          {
            text: 'Wednesday',
            value:'wednesday'
          },
          {
            text: 'Thursday',
            value:'thursday'
          },
          {
            text: 'Friday',
            value:'friday'
          }
        ]
      },
    },
    methods: {
      
    },

}
</script>

<style>

</style>