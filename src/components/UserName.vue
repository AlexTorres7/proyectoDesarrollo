<template>
    <section id="inicio">
      <div class="head">
        <h1>Proyecto</h1>

        <h2>CRUD Colaboradores FRD</h2>

        <button id="btn-colaboradores">Colaboradores</button>
        <button id="btn-proyectos">Proyectos</button>
        <button id="btn-actividades">Actividades</button>

      </div>
    </section>

    <section id="modulo-colaboradores" style="display: none;">
      <div class="head-modulo">
        <button id="btn-registrar">Registrar</button>
      </div>
      
      <div class="body-modulo">
        <div class="search">
                <input type="text"
                    placeholder="Buscar"
                    id="buscar">
                <button id="btn-buscar">Consultar</button>
            
        </div>

        <div id="navlist">
        <a href="#">ID</a>
        <a href="#">Nombre Colaborador</a>
        <a href="#">Proyecto</a>
        <a href="#">Telefono</a>
        <a href="#">Email</a>
        <a href="#">Cargo</a>
        <a href="#">Fecha de registro</a>
        </div>

        <div class="modulo-buttons">
          <button id="btn-modificar">Modificar</button>
          <button id="btn-eliminar">Eliminar</button>
        </div>

      </div>
    </section>

    <section id="registro" style="display: none;">
        <div id="alta">
          <div class="nombre">
            <div>
              <label for="name">Nombre(s)</label>
              <input type="text" name="agregar" id="name">
            </div>

            <div>
              <label for="apellido-pa">Apellido paterno</label>
              <input type="text" name="agregar" id="apellido-pa">
            </div>
            
            <div>
            <label for="apellido-ma">Apellido materno</label>
            <input type="text" name="agregar" id="apellido-ma">
            </div>
          </div>

          <div class="datos">
            <div>
              <label for="tel">Telefono</label>
              <input type="text" name="agregar" id="tel">
            </div>

            <div>
              <label for="email">Email</label>
              <input type="text" name="agregar" id="email">
            </div>
          </div>

          <div class="cargo">
            <div>
              <label for="cargo">Cargo</label>
              <input type="text" name="agregar" id="cargo">
            </div>

            <div>
              <label for="proyecto">Proyecto</label>
              <input type="text" name="agregar" id="proyecto">
            </div>
          </div>

          <div class="fecha">
            <div>
              <label for="fecha">Fecha de registro</label>
              <input type="text" name="agregar" id="fecha">
            </div>
            
            <div>
              <label for="hora">Hora de registro</label>
              <input type="text" name="agregar" id="hora">
            </div>
          </div>
        </div>

          <div class="button">
            <button id="btn-cancelar">Cancelar</button>
            <button id="btn-agregar">Agregar</button>
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