<template>
    <section id="usuario">
      <div class="head">
        <h1>Proyecto</h1>

        <h2>Dar de alta a Colaborador</h2>
      </div>
        
        <div id="alta">
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

    <section id="modulo-colaboradores">
      <div class="head-modulo">
        
      </div>
      
      <div class="body-modulo">
        <div class="search"                     
             style="display: flex; flex-direction: column;">
            <form action="#">
                <input type="text"
                    placeholder="Buscar"
                    name="search">
                <button>Buscar</button>
            </form>
        </div>

        <div class="Base de datos">
          <h1>Aquí va la base de datos</h1>
        </div>

        <div class="modulo-buttons">
          <button>Modificar</button>
          <button>Eliminar</button>
        </div>

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
</script>