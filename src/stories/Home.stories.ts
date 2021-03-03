import Home from '../views/Home.vue'

export default {
  title: 'Home'
}

const homeTemplate = '<Home />'

export const Default = () => ({
  components: { Home },
  template: homeTemplate
})
