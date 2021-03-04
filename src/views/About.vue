<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(todo, index) in $store.state.todos" :key="index">
      <input type="checkbox" v-model="todo.isdone" />{{ todo.title }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createNamespacedHelpers } from 'vuex'
const mapState = createNamespacedHelpers('Sample')
export default Vue.extend({
  data() {
    return {
      //todos:
    }
  }
})
</script>
