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
        name: 'Dimitri',
        email: 'dimitri.vegas@ga.ntig.se',
        teacher: 'Daniel',
        password: 'Россия'
      },
      {
        name: 'Mike',
        email: 'mikey.daddy@ga.ntig.se',
        teacher: '',
        password: 'far'
      }
    ]
  },
  mutations: {
    updateCurrentUser (state, newUser) {
      state.currentUser = newUser
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
    }
  }
})
