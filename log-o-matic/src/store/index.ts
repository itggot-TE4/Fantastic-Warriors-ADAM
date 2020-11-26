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
        id: '8qdjhh9fw',
        name: 'Daniel',
        email: 'daniel.berg@ga.ntig.se',
        password: 'bananpaj',
      },
      {
        id: 'mxuucbv5e',
        name: 'Linus',
        email: 'linus.styren@ga.ntig.se',
        password: 'VueENajs'
      }
    ],
    students: [
      {
        id: '0gti3xpl5',
        name: 'Dimitri',
        email: 'dimitri.vegas@elev.ga.ntig.se',
        teacher: 'Daniel',
        password: 'Россия'
      },
      {
        id: 'w28w1qm99',
        name: 'Mike',
        email: 'mikey.daddy@elev.ga.ntig.se',
        teacher: '',
        password: 'far'
      }
    ],
    admins: [
      {email: "bob@byggen.bygg",name:"bob", password:"bygg"}
    ]
  },
  mutations: {
    updateCurrentUser (state, newUser) {
      state.currentUser = newUser
    },
    updateStudentTeacher (state, payload:{id:string, newTeacher:string}):void {
      let student:any = state.students.find(student => student.id===payload.id)
      student.teacher = payload.newTeacher
    },
    updateStudentPassword (state, payload: {id:string, newPassword:string}):void {
      let student:any = state.students.find(student => student.id===payload.id)
      student.password = payload.newPassword
    },
    updateTeacherPassword (state, payload: {id:string, newPassword:string}):void {
      let teacher:any = state.teachers.find(teacher => teacher.id===payload.id)
      teacher.password = payload.newPassword
    },
    createTeacher (state, payload: {email:string, name:string, password:string}):void {
      const id:string = Math.random().toString(36).substr(2, 9)
      const nameTaken = state.teachers.find(teacher => teacher.name === payload.name)
      const emailTaken = state.teachers.find(teacher => teacher.email === payload.email)
      if (nameTaken || emailTaken) {
        alert('Name and/or email is already in use')
      } else {
        state.teachers.push({id:id, name:payload.name, email:payload.email, password:payload.password})
      }
    },
    createStudent (state, payload: {email:string, name:string, password:string, teacher:string}):void {
      const id:string = Math.random().toString(36).substr(2, 9)
      const nameTaken = state.students.find(student => student.name === payload.name)
      const emailTaken = state.students.find(student => student.email === payload.email)
      if (nameTaken || emailTaken) {
        alert('Name and/or email is already in use')
      } else {
        state.students.push({id:id, 
                              name:payload.name, 
                              email:payload.email, 
                              teacher:payload.teacher, 
                              password:payload.password})
      }
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
