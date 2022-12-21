<template>
    <section id="usuario">
        <h1>Proyecto</h1>

        <h2>Dar de alta a Colaborador</h2>

        <div class="alta">
            <label for="name">Nombre Completo</label>
            <input type="text" name="agregar" id="name">

            <label for="cargo">Cargo</label>
            <input type="text" name="agregar" id="cargo">

            <label for="name">Email</label>
            <input type="text" name="agregar" id="email">

            <label for="cargo">Telefono</label>
            <input type="text" name="agregar" id="cel">

            <label for="name">Área</label>
            <input type="text" name="agregar" id="area">

            <label for="cargo">Fecha de registro</label>
            <input type="text" name="agregar" id="fecha">

            <label for="cargo">Hora de registro</label>
            <input type="text" name="agregar" id="hora">

        </div>

        <button id="boton">Agregar</button>
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