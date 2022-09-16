<template>
  <div class="px-4 flex h-screen">
    <div class="flex flex-col w-1/5 border-r border-gray-700">
      <div class="mt-4">
        <h1 @click="$store.state.removeX = false" class="text-2xl font-serif font-semibold text-slate-800">Vuetify Vazifa</h1>
        <p @click="$store.state.removeX = false" class="font-bold text-slate-600 border-b-2 border-spacing-5">Eng yaxshi vazifalar boshqaruvi</p>
      </div>
      <div class="flex flex-col mt-2">
        <router-link @click="activeColor()" class="font-bold font-mono  border-gray-400 hover:bg-gray-200 py-2 px-2 duration-200" to="/task"><button class="fa-solid fa-list-check mr-6"></button>Vazifalar</router-link>
        <router-link class="font-bold font-mono hover:bg-gray-200 py-2 px-2 duration-200" to="/about"><i class="fa-solid fa-question mr-[31px]"></i>Haqida</router-link>
      </div>
    </div>
      <div class="w-4/5 shadow-xl shadow-blue-50">
        <NavBar />
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
    }
  },
}
</script>