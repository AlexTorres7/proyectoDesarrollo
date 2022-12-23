[9:26] Brandon Garcia

<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Nueva Actividad</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarActividad">
            <div class="form-group">
              <label for="">Nombre del Proyecto:</label>
              <select
              class="form-control"
              name="nom_proyecto"
              id="nom_proyecto"
              v-model="actividad.nom_proyecto"
              aria-describedby="helpId"
              placeholder=""
              style="width: 100%; height: 52%;">
                <option value=""></option>
              </select>
            </div>

            <div class="form-group">
              <label for="">Nombre del colaborador:</label>
              <select
              class="form-control"
              name="nom_colaborador"
              id="nom_colaborador"
              v-model="actividad.nom_colaborador"
              aria-describedby="helpId"
              placeholder=""
              style="width: 100%; height: 52%;">
                <option value=""></option>
              </select>
            </div>
 
            <div class="form-group">
              <label for="">Actividad:</label>
              <input
                type="text"
                class="form-control"
                name="nom_actividad"
                v-model="actividad.nom_actividad"
                id="nom_actividad"
                aria-describedby="helpId"
                placeholder=""
              />
 
              <small id="helpId" class="form-text text-muted"
                >Escribe tu actividad</small
              >
            </div>
 
            <div class="form-group">
              <label for="">Fecha y hora inicio:</label>
              <input
                type="datetime-local"
                class="form-control"
                name="fechaini"
                v-model="actividad.fechaini"
                id="fechaini"
                aria-describedby="helpId"
                placeholder=""
              />
            </div>
 
            <div class="form-group">
              <label for="">Fecha y hora fin:</label>
              <input
                type="datetime-local"
                class="form-control"
                name="fechafin"
                v-model="actividad.fechafin"
                id="fechafin"
                aria-describedby="helpId"
                placeholder=""
              />
            </div>
 
            <div class="btn-group" role="group" aria-label="">
              <button type="submit" class="btn btn-success">Agregar</button>
              <router-link :to="{name:'ConsultarColaborador'}" class="btn btn-warning">Cancelar</router-link>
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
        actividad: {},
      };
    },
 
    methods: {
      agregarActividad() {
        const datosEnviar = {
          nom_proyecto: this.actividad.nombre_proyecto,
          nom_colaborador: this.actividad.nom_colaborador,
          nom_actividad: this.actividad.nom_actividades,
          fechaini: this.actividad.horaini,
          fechafin: this.actividad.horafin
        };
 
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(datosEnviar)
        }

        console.log(datosEnviar);
        fetch('http://10.60.63.122:3001/api/actividades', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          window.location.href='ConsultarActividad'
        })
 
        .catch(err => console.error(err));
      },
      consultarColaborador() {
        const datosEnviar = {
          nom_colaborador: this.actividad.nom_colaborador
        };
 
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(datosEnviar)
        }

        console.log(datosEnviar);
        fetch('http://10.60.63.122:3001/api/colaborador/todo', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          window.location.href='ConsultarActividad'
        })
 
        .catch(err => console.error(err));
      },
      consultarProyecto() {
        const datosEnviar = {
            nom_proyecto: this.actividad.nombre_proyecto
        };
 
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(datosEnviar)
        }

        console.log(datosEnviar);
        fetch('http://10.60.63.122:3001/api/proyectos/todo', options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          window.location.href='ConsultarActividad'
        })
 
        .catch(err => console.error(err));
      },

    },
  };
</script>
