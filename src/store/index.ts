import Vue from 'vue'
import Vuex from 'vuex'
import {
  Getters,
  Mutations,
  Actions,
  Module,
  createStore
} from 'vuex-smart-module'
import { TodosProps } from '@/interface/Todos'

class SampleState implements TodosProps {
  todos = [
    {
      title: 'test',
      isdone: false
    },
    {
      title: 'test2',
      isdone: false
    }
  ]
}

const Sample = new Module({
  state: SampleState
})

Vue.use(Vuex)
export const store = createStore(Sample)
