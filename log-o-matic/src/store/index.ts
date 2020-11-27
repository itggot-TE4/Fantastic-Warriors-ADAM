import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// såhär rensar man localstorage! / VuexPersist
// window.localStorage.clear();

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    // Rudimentary sign-in token (currently username)
    currentUser:{token:'', name:''},
    // substitute for backend database
    teachers:[
      {
        id: '8qdjhh9fw',
        name: 'Daniel',
        email: 'daniel.berg@ga.ntig.se',
        password: 'bananpaj',
        permToken: 'teacher'
      },
      {
        id: 'mxuucbv5e',
        name: 'Linus',
        email: 'linus.styren@ga.ntig.se',
        password: 'VueENajs',
        permToken: 'teacher'
      }
    ],
    students: [
      {
        id: '0gti3xpl5',
        name: 'Dimitri',
        email: 'dimitri.vegas@elev.ga.ntig.se',
        teacher: 'Daniel',
        password: 'Россия',
        permToken: 'student'
      },
      {
        id: 'w28w1qm99',
        name: 'Mike',
        email: 'mikey.daddy@elev.ga.ntig.se',
        teacher: '',
        password: 'far',
        permToken: 'student'
      }
    ],
    admins: [
      {email: "bob@byggen.bygg", name:"bob", password:"bygg", permToken: 'admin'}
    ],
    logbooks: [
      {id: 'r388n1wc69', date: 'test/bog', studentId: 'vqduhh9fn'}
    ],
    comments: [
      {id: 'w28n1qm79', writer: 'bob', content: 'Jag har ju skrivit min loggbok, kan du svara eller?!', date: 'test/bog', logbookId: 'r388n1wc69'}
    ],
  },
  mutations: {
    updateCurrentUser (state, newUser) {
      // console.log(newUser.permToken);
      state.currentUser.token = newUser.permToken
      state.currentUser.name = newUser.name
    },
    logOut (state) {
      state.currentUser.token = ''
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
        state.teachers.push({id:id, 
                              name:payload.name, 
                              email:payload.email, 
                              password:payload.password, 
                              permToken:'teacher'})
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
                              password:payload.password,
                              permToken:'student'})
      }
    },
    saveComment (state, payload: { writer:string, content:string}):void {
      const id:string = Math.random().toString(36).substr(2, 9);
      state.comments.push({ id: id, writer: payload.writer, content: payload.content, date: `${Date.now()}`, logbookId: 'tempoMaximum'});
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
      return teachers;
    },
    users: state => {
      let users: { email: string; name: string; password: string; permToken: string }[] = []
      state.students.forEach(student => {
        users.push({email:student.email, 
                    name:student.name, 
                    password:student.password, 
                    permToken:student.permToken})
      })
      state.teachers.forEach(teacher => {
        users.push({email:teacher.email, 
                    name:teacher.name, 
                    password:teacher.password, 
                    permToken:teacher.permToken})
      })
      state.admins.forEach(admin => {
        users.push({email:admin.email, 
                    name:admin.name, 
                    password:admin.password, 
                    permToken:admin.permToken})
      })
      return users
    },
    getCurrentUser: state => {
      return state.currentUser.name;
    },
    getComments: state => {
      // This gets all the comments, even if it's not from the same user!
      console.log(state.comments);
      return state.comments;
    },
  },
  plugins: [vuexLocal.plugin]
})
