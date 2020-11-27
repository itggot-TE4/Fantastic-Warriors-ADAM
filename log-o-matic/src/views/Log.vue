<template>
    <div id="app">
        <v-card class="mx-auto mt-8 text-center" width="25vw">
            <h2>Week {{week}}</h2>
            <h2>Lynwood Satterfield</h2>
            <div>
                <v-icon @click="temp()">mdi-chevron-left</v-icon>
                <span class="title">Monday</span>
                <v-icon @click="temp()">mdi-chevron-right</v-icon>
            </div>
        </v-card>
        <v-container>
            <v-card class="pa-2">
                <v-textarea label="Vad har du gjort idag?"></v-textarea>
                <v-textarea label="Vad förstod du inte?"></v-textarea>
                <v-textarea label="Vilka frågor har du inte fått svar på?"></v-textarea>
                <v-textarea label="Vad vill du lära dig mer om?"></v-textarea>
                <v-timeline>
                    <v-timeline-item v-for="(n, index) in getComments" :key="index" color="red lighten-2" large>
                        <template v-slot:opposite>
                        <span>{{n.writer}}</span>
                        </template>
                        <v-card class="elevation-2">
                        <v-card-text>{{n.content}}</v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            <v-textarea filled label="Comment" v-model="comment"></v-textarea>
            <div class="d-flex flex-row-reverse">
                <v-btn @click="saveComment" color="success">Send Comment</v-btn>
            </div>
            </v-card>
        </v-container>
    </div>
</template>

<script lang="ts">
    export default {
        data () {
            const today = new Date()
            return {
                post: this.$store.getters.getPost(today, this.$store.getters.getCurrentUserName),
                week: this.$store.getters.getWeekNumber(today).toString(),
                comment: ''
            }

        },
        components: {
            // LoginForum
        },
        methods: {
            saveComment() {
                this.$store.commit("saveComment", {writer: this.$store.getters.getCurrentUserName, content: this.comment})
            }
        },
        computed: {
            getComments(){
                return this.$store.getters.getComments;
            }
        }
    }
</script>