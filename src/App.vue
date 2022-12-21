<template>
  <img alt="FRD" src="./assets/dondé.png" id="img">
  <UserName msg="Welcome to Your Vue.js App"/>
</template>

<script>
import UserName from './components/UserName.vue'

export default {
  name: 'App',
  components: {
    UserName
  }
}
</script>

<style>

#app {
  text-align: center;
}

img#img {
    width: 300px;
}

@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,300;0,500;1,300;1,500&display=swap');
body{
  /*font-family: 'Poppins', sans-serif;*/
  font-family: 'PT Serif', serif;
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#35f931+0,9eff30+50,fff189+100 */
background: #35f931; /* Old browsers */
background: -moz-linear-gradient(left,  #35f931 0%, #9eff30 50%, #fff189 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left,  #35f931 0%,#9eff30 50%,#fff189 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right,  #35f931 0%,#9eff30 50%,#fff189 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#35f931', endColorstr='#fff189',GradientType=1 ); /* IE6-9 */
}

.alta {
  display: flex;
  flex-direction: column;
}

.button{

}
</style>
