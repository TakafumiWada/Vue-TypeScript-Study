import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "HelloWorld",
};

const messageData = {
  msg: "Welcome to Your Vue.js + TypeScript App",
};

const helloWorldTemplate = '<HelloWorld v-bind="message"></HelloWorld>';

export const Default = () => ({
  components: { HelloWorld },
  template: helloWorldTemplate,
  props: {
    message: {
      default: () => messageData,
    },
  },
});
