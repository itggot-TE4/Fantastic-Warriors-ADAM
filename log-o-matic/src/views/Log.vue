<template>
    <div id="app">
        <v-card class="mx-auto mt-8 text-center" width="25vw">
            <h2>Week 48</h2>
            <h2>Lynwood Satterfield</h2>
            <div>
                <v-icon @click="temp()">mdi-chevron-left</v-icon>
                <span class="title">Monday</span>
                <v-icon @click="temp()">mdi-chevron-right</v-icon>
            </div>
        </v-card>
        <v-container>
            <v-card class="pa-2">
                <v-textarea label="Your answer"></v-textarea>
                <v-textarea label="Vad förstod du inte?"></v-textarea>
                <v-textarea label="Vilka frågor har du inte fått svar på?"></v-textarea>
                <v-textarea label="Vad vill du lära dig mer om?"></v-textarea>
                <v-timeline>
                <v-timeline-item
                    v-for="n in 3"
                    :key="n"
                    color="red lighten-2"
                    large>
                    <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
                    </template>
                    <v-card class="elevation-2">
                    <v-card-title class="headline">
                        Lorem ipsum
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                    </v-card>
                </v-timeline-item>
                </v-timeline>
            <v-textarea filled label="Comment"></v-textarea>
            <div class="d-flex flex-row-reverse">
                <v-btn color="success">Send Comment</v-btn>
            </div>
            </v-card>
        </v-container>
    </div>
</template>

<script lang="ts">
    // import LoginForum from '@/components/LoginForum.vue';

    export default {
        components: {
            // LoginForum,
        }
        
    }
</script>