<template>
    <section id="usuario">
      <div class="head">
        <h1>Proyecto</h1>

        <h2>Dar de alta a Colaborador</h2>
      </div>
        
        <div class="alta">
          <div class="nombre">
            <label for="name">Nombre(s)</label>
            <input type="text" name="agregar" id="name">
            
            <label for="apellido-pa">Apellido paterno</label>
            <input type="text" name="agregar" id="apellido-pa">

            <label for="apellido-ma">Apellido materno</label>
            <input type="text" name="agregar" id="apellido-ma">
          </div>

          <div>
            <label for="tel">Telefono</label>
            <input type="text" name="agregar" id="tel">

            <label for="email">Email</label>
            <input type="text" name="agregar" id="email">
          </div>

          <div>
            <label for="cargo">Cargo</label>
            <input type="text" name="agregar" id="cargo">
            
            <label for="proyecto">Proyecto</label>
            <input type="text" name="agregar" id="proyecto">
          </div>

          <div>
            <label for="fecha">Fecha de registro</label>
            <input type="text" name="agregar" id="fecha">
            
            <label for="hora">Hora de registro</label>
            <input type="text" name="agregar" id="hora">
          </div>
        </div>

          <div class="button">
            <button id="boton-cancelar">Cancelar</button>
            <button id="boton-agregar">Agregar</button>
          </div>
    </section>

</template>

<script>

export default {
  name: 'UserName',
  props: {
    msg: String
  }
}
/* let boton = document.getElementById('boton')
boton.addEventListener('click', cambioPantalla)

function cambioPantalla(){
  alert("Cambio de pantalla")
} */
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Zen+Dots&display=swap');
.usuario{
    font-family: 'Zen Dots', cursive;

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#5f32ff+0,9e2ff9+50,ff89fd+100 */
background: rgb(95,50,255); /* Old browsers */
background: -moz-linear-gradient(left,  rgba(95,50,255,1) 0%, rgba(158,47,249,1) 50%, rgba(255,137,253,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left,  rgba(95,50,255,1) 0%,rgba(158,47,249,1) 50%,rgba(255,137,253,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right,  rgba(95,50,255,1) 0%,rgba(158,47,249,1) 50%,rgba(255,137,253,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5f32ff', endColorstr='#ff89fd',GradientType=1 ); /* IE6-9 */
}

.usuario {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>