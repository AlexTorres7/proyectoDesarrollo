<template>
  <div class="home">
    <img alt="Dondé" src="../assets/dondé.png">
    <HelloWorld msg="Bienvenido al Sistema"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
