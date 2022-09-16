<template>
    <div class="mt-2 px-2 relative">
        <input @click="$store.dispatch('getX')" v-model="newGoal"  type="text" class="border-2 w-full border-gray-700 py-3 pl-3 rounded outline-none font-bold font-serif tracking-widest group-hover:border-blue-400" placeholder="Rejayizni kiriting...">
        <button v-if="$store.state.removeX" class="fa-solid fa-x absolute top-2.5 text-xl right-12 font-medium font-serif"></button>
        <button @click="getGoal()" class="fa-solid fa-plus absolute top-1 text-3xl right-5 font-medium font-serif"></button>
    </div>
    <div class="mt-2 px-2">
        <ul v-for="person in $store.state.persons" :key="person"  class=" relative">
            <input type="checkbox" class="absolute top-3 left-2 pl-2 w-4 h-4">
            <li class="border-b-2 border-gray-400 py-2 pl-16 font-serif text-xl">
                {{ person }}
            </li>
            <i class="fa-solid fa-trash absolute top-1.5 text-xl right-2 text-blue-700"></i>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'taskView',
    data() {
        return {
            newGoal: ''
        }
    },
    methods: {
        getGoal() {
            this.$store.dispatch('getGoal', this.newGoal);
            this.newGoal = '';
        },
    }
}
</script>