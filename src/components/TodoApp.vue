<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
        {{ todo.text }}
    </div>
  </div>
</template>

<script>
export default {
    name:'TodoApp',
    data() {
        return {
            todos: [
                {
                    id: 1,
                    text: "Hello! learn Vue"
                }
            ]
        }
    },

    methods: {
        deneme() {
            console.log("merhaba")
        }
    }

}
</script>

<style>

</style>