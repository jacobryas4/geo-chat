<template>
  <div id="app">
    <Navbar />
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  background-color: #ddd;
}
</style>
