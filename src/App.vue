
<template>
  
 <nav>
    <button><img alt="FRD" src="./assets/dondé-logo.png" id="img"></button>

    <router-link to="/CrearColaborador">Crear Colaborador</router-link> 
    <router-link to="/ConsultarColaborador">Consultar Colaborador</router-link> 
    <router-link to="/ActualizarColaborador">Actualizar Colaborador</router-link> 
    <router-link to="/EliminarColaborador">Eliminar Colaborador</router-link>
    <router-link to="/ProyectosG">Proyectos</router-link>

  </nav>
  <router-view/>
</template>


<style>




@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,300;0,500;1,300;1,500&display=swap');
nav{
  /*font-family: 'Poppins', sans-serif;*/
  font-family: 'PT Serif', serif;
background-color: green;
display: flex;
width: 100%;
height: 60px;
}

nav button{
width: 60px;
height: 60px;
background-color: green;
border: 0;
margin-right: auto;
}

nav img{
width: 50px;
height: 50px;
}

nav a{
    
  display: flex;
    color: white;
    padding: 12px;
    text-decoration: none;
    font-size: 15px;
}

nav a:hover{
  color: white;
  font-weight: bolder;
  text-align: center;
}

</style>
