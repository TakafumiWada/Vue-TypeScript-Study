<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld v-bind="messageData" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      messageData: {
        msg: 'Welcome to Your Vue.js + TypeScript App'
      }
    }
  },
  components: {
    HelloWorld
  }
})
</script>
