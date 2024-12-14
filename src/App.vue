<script setup>
import { Navbar } from '@/components/common/Navbar.vue'
import { Footer } from '@/components/common/Footer.vue'
</script>

<template>
  <nav>
    <Navbar />
  </nav>

  <main>
    <router-view />
  </main>

  <footer>
    <Footer />
  </footer>
</template>
