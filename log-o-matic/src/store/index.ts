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
        id: 1,
        name: 'Daniel',
        email: 'daniel.berg@ga.ntig.se',
        password: 'bananpaj',
      },
      {
        id: 2,
        name: 'Linus',
        email: 'linus.styren@ga.ntig.se',
        password: 'VueENajs'
      }
    ],
    students: [
      {
        id: 3,
        name: 'Dimitri',
        email: 'dimitri.vegas@elev.ga.ntig.se',
        teacher: 'Daniel',
        password: 'Россия'
      },
      {
        id: 4,
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
    },
    updateStudentPassword (state, payload: {id:number, newPassword:string}):void {
      let student:any = state.students.find(student => student.id===payload.id)
      student.password = payload.newPassword
    },
    updateTeacherPassword (state, payload: {id:number, newPassword:string}):void {
      let teacher:any = state.teachers.find(teacher => teacher.id===payload.id)
      teacher.password = payload.newPassword
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
