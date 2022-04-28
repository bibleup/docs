<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

</script>

<template>
  <Header/>
  
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
    <div :key="route.name">  
      <component :is="Component"></component>
    </div>
  </transition>
  </router-view>

  <Footer />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
