<template>
  <div class="home">
    <img style="width: 970px;" alt="Dondé" src="../assets/dondé.png">
    <HelloWorld msg="Bienvenido"/>
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
