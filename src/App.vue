<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <TestNumber msg="Hola"/>
</template>

<script>
  //import UserName from './components/UserName.vue'
  import TestNumber from './components/TestNumber.vue'
  //<UserName msg="Welcome to Your Vue.js App"/>

  export default {
    name: 'App',
    components: {
      //HelloWorld
      TestNumber
      
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
