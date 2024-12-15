<script setup>
import { ref } from 'vue'
const searchQuery = ref('')

const search = () => {
  console.log('searching for:', searchQuery.value)
}
</script>

<template>
  <nav class="absolute w-full top-0 left-0 z-10">
    <div class="flex bg-jaggedIce-300 shadow-mdlex py-2 px-2 items-center justify-between">
      <!-- Left section, logo -->
      <a href="/" class="px-5 hover:underline text-jaggedIce-50 font-bold text-3xl">laWiki</a>

      <!-- Center section, search bar -->
      <div class="flex items-center">
        <input
          type="text"
          v-model="searchQuery"
          class="border border-jaggedIce-400 rounded-lg h-8 px-4 text-sm mr-1 w-96"
          placeholder="Buscar..."
          @keyup.enter="search"
        />

        <button
          class="bg-jaggedIce-500 hover:bg-jaggedIce-600 text-jaggedIce-50 px-2 py-1 rounded-lg material-symbols-outlined"
          @click="search"
        >
          search
        </button>
      </div>

      <!-- Right section, profile -->
      <div class="flex items-center">
        <a
          class="material-symbols-outlined text-4xl text-jaggedIce-900 mx-10"
          href="/"
          aria-label="Create wiki"
        >
          add_circle
        </a>
        <a class="material-symbols-outlined text-4xl text-jaggedIce-900" href="/profile">
          account_circle
        </a>
      </div>
    </div>
  </nav>
</template>
