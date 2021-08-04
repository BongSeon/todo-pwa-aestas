<template>
  <q-page>
    <q-input
      v-model="newTask"
      placeholder="Add task"
      @keyup.enter="addTask"
      class="bg-cyan-8"
      dark
      filled
      square
    >
      <template v-slot:append>
        <q-btn
          @click="addTask"
          icon="add"
          round
          dense
          flat
        />
      </template>
    </q-input>

    <q-list
      bordered
      separator
    >
      <q-item
        v-for="task in tasks"
        :key="task.id"
        class="bg-cyan-1"
      >
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>

      </q-item>

    </q-list>    
  </q-page>
</template>

<script>
var qs = require('qs')

export default {
  name: 'PageTodo',
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    getTasks() {
      this.$axios.get('http://localhost:3000/tasks').then(response => {
        this.tasks = response.data
      }).catch(err => {
        console.log('error: ', err)
      })
    },
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTask
      }
      this.$axios.post(`http://localhost:3000/createTask?${ qs.stringify(newTask) }`).then(response => {
        this.tasks.push(newTask)
      })
      this.newTask = ''
    }
  },
  mounted() {
    this.getTasks()
  }
}
</script>
