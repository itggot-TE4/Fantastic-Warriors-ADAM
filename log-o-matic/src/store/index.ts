import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Rudimentary sign-in token (currently username)
    currentUser:"",
    // substitute for backend database
    registeredUsers:[{name:"bob", password:"bygg"}],
    teachers:[
      {
        name: 'Daniel',
        email: 'daniel.berg@ga.ntig.se',
        password: 'bananpaj',
      },
      {
        name: 'Linus',
        email: 'linus.styren@ga.ntig.se',
        password: 'VueENajs'
      }
    ],
    students: [
      {
        id: 1,
        name: 'Dimitri',
        email: 'dimitri.vegas@elev.ga.ntig.se',
        teacher: 'Daniel',
        password: 'Россия'
      },
      {
        id: 2,
        name: 'Mike',
        email: 'mikey.daddy@elev.ga.ntig.se',
        teacher: '',
        password: 'far'
      }
    ]
  },
  mutations: {
    updateCurrentUser (state, newUser) {
      state.currentUser = newUser
    },
    updateTeacher (state, payload:{id:number, newTeacher:string}):void {
      let student:any = state.students.find(student => student.id===payload.id)
      student.teacher = payload.newTeacher
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    teacherNames: state => {
      let teachers: string[] = []
      state.teachers.forEach(teacher => {
        teachers.push(teacher.name)
      })
      return teachers
    },
    studentByName: (state) => (name:string) => {
      return state.students.find(student => student.name === name)
    }
  }
})
