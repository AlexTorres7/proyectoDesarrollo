<template>
    <!--Formulario para la captura de datos del prospecto-->
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Nuevo Proyecto</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarProyecto">
            <div class="form-group">
              <label for="">Nombre del proyecto:</label>
              <input
                type="text"
                class="form-control"
                name="nombre_proyecto"
                v-model="proyecto.nombre_proyecto"
                id="nombre_proyecto"
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" class="form-text text-muted"
                >Escribe el nombre del proyeto</small
              >
            </div>
  
            <div class="form-group">
              <label for="">Tipo de proyecto:</label>
              <input
                type="text"
                class="form-control"
                name="tipo_proyecto"
                v-model="proyecto.tipo_proyecto"
                id="tipo_proyecto"
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" class="form-text text-muted"
                >Escribe el tipo de proyecto</small
              >
            </div>
  
            <div class="form-group">
              <label for="">Descripción del proyecto:</label>
              <input
                type="text"
                class="form-control"
                name="descripcion_proyecto"
                v-model="proyecto.descripcion_proyecto"
                id="descripcion_proyecto"
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" class="form-text text-muted"
                >Escribe la descripción del proyecto</small
              >
            </div>

            <div class="form-group">
            <label for="">Fecha y hora inicio:</label>
            <input
              type="datetime-local"
              class="form-control"
              name="fechaini"
              v-model="proyecto.fechaini"
              id="fechaini"
              aria-describedby="helpId"
              placeholder=""
            />
          </div>

          <div class="form-group">
            <label for="">Fecha y hora final:</label>
            <input
              type="datetime-local"
              class="form-control"
              name="fechafin"
              v-model="proyecto.fechafin"
              id="fechafin"
              aria-describedby="helpId"
              placeholder=""
            />
          </div>
  
            <div class="btn-group" role="group" aria-label="">
              <button type="submit" class="btn btn-success">Agregar</button>
              <router-link :to="{name:'ConsultarProyecto'}" class="btn btn-warning">Cancelar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        proyecto: {},
      };
    },
    methods: {
        agregarProyecto() {
        /* console.log(this.colaborador); */
        const datosEnviar = {
          nombre_proyecto: this.proyecto.nombre_proyecto,
          tipo_proyecto: this.proyecto.tipo_proyecto,
          descripcion_proyecto: this.proyecto.descripcion_proyecto,
          fechaini: this.proyecto.fechaini,
          fechafin: this.proyecto.fechafin
        };
  
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(datosEnviar)
        }
  
        console.log(datosEnviar);
  
        fetch('http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/proyectos', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          window.location.href='ConsultarProyecto'
        })
        .catch(err => console.error(err));
  
          /* fetch('http://10.60.63.122:3001/api/colaboradores',{
            method:"POST",
            body:JSON.stringify(datosEnviar)
          })
  
          .then(respuesta=>respuesta.json())
          .then((datosRespuesta=>{
              console.log(datosRespuesta);
              window.location.href='ConsultarColaborador'
          })
          .catch(err => console.error(err))
          ) */
      },
    },
  };
  </script>
  