<template>
  <div class="mt-2 px-2 relative">
    <input
      v-model="newGoal"
      @keyup.enter="getGoal()"
      placeholder="Rejayizni kiriting..."
      type="search"
      class="
        border-2
        w-full
        border-gray-700
        py-3
        pl-3
        pr-8
        text-xl
        rounded
        outline-none
        font-bold font-serif
        tracking-wide
        group-hover:border-blue-400
      "
    />
    <button @click="getGoal()" class=" fa-solid fa-plus absolute top-2 text-blue-700 text-3xl right-5 font-bold font-serif"></button>
  </div>
    <div class="mt-2 px-2">
        <ul v-for="(todo, index) in $store.state.todos" :key="todo" class="relative" :class="{ 'bg-blue-200': todo.status }">
            <input type="checkbox" v-model="todo.status" class="absolute top-3 left-2 pl-2 w-4 h-4"/>
                <li class="border-b-2 border-gray-400 py-2 pl-16 font-serif text-xl" :class="{ 'line-through': todo.status }">
                    {{ todo.title }}
                </li>
                <i @click="$store.dispatch('deleteGoal', index)" class="fa-solid fa-trash absolute top-1.5 text-xl right-2 text-blue-700"></i>
        </ul>
    </div>
</template>

<script>
export default {
  name: "taskView",
  data() {
    return {
      newGoal: "",
    };
  },
  methods: {
    getGoal() {
      if (this.newGoal !== "") {
        this.$store.dispatch("getGoal", { title: this.newGoal, status: false });
        this.newGoal = "";
      } else {
        alert("rejalarizni yozing");
      }
    },
  },
};
</script>