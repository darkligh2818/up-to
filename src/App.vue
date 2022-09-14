<template>
  <div class="px-4 py-6 flex">
    <div class="flex flex-col w-1/5">
      <div>
        <h1 class="text-2xl font-serif font-semibold text-slate-800">Vuetify Vazifa</h1>
        <p class="font-bold text-slate-600 border-b-2">Eng yaxshi vazifalar boshqaruvi</p>
      </div>
      <div class="flex flex-col mt-4 space-y-2">
        <router-link class="font-bold font-mono" to="/task"><button class="fa-solid fa-list-check mr-6"></button>Vazifalar</router-link>
        <router-link class="font-bold font-mono" to="/about"><i class="fa-solid fa-question mr-6"></i>Haqida</router-link>
      </div>
     </div>
      <div class="w-4/5">
        <NavBar />
    </div>
  </div>
<router-view></router-view>
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
  }
}
</script>