import { shallowMount } from '@vue/test-utils';
import WelcomeText from '@/components/WelcomeText.vue';
import Vue from "vue";
import vuetify from "vuetify";

Vue.use(vuetify)


describe('WelcomeText.vue', () => {
  it('renders the welcome message', () => {
    const msg = 'Welcome to Log-O-Matic'
    const wrapper = shallowMount(WelcomeText)

    expect(wrapper.text()).toMatch(msg)
  })
})