import { shallowMount } from '@vue/test-utils';
import WelcomeText from '@/components/WelcomeText.vue';
import Vue from "vue";
import vuetify from "vuetify";

import login from '@/components/LoginForum.vue'
import router from '@/router/index.ts'

Vue.use(vuetify)


describe('WelcomeText.vue', () => {
  it('renders the welcome message', () => {
    const msg = 'Welcome to Log-O-Matic'
    const wrapper = shallowMount(WelcomeText)

    expect(wrapper.text()).toMatch(msg)
  })
})


describe('router', () => {
  it('Is in hash mode', () => {
    expect(router.mode).toEqual('hash')
  })
})

describe('Login.vue', () => {

  it('Renders login page correctly', () => {
    const wrapper = shallowMount(login)
    expect(wrapper.text()).toEqual("mdi-account \n          User Profile\n               Sign in")
  })

})