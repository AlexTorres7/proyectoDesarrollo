<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Nueva Actividad</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarActividad">
          <div class="form-group">
            <label for="">Nombre del Proyecto:</label>
            <select
            class="form-select" aria-label="Default select example"
              aria-describedby="helpId"
              placeholder=""
              v-model="actividad.id_proyecto"
            >
              <option  v-for="proyectos in proyectos" :key="proyectos.id_proyecto" :value="proyectos.id_proyecto">{{ proyectos.nombre_proyecto }}
              </option>
            </select>
          </div>


          <div class="form-group">
            <label for="">Nombre del colaborador:</label>
            <select
            class="form-select" aria-label="Default select example"
              name="id_colaborador"
              id="id_colaborador"
              aria-describedby="helpId"
              placeholder=""
              v-model="actividad.id_colaborador"

            >
              <option v-for="colaboradores in colaboradores" :key="colaboradores.id_colaborador" :value="colaboradores.id_colaborador">{{ colaboradores.nom_colaborador }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="">Actividad:</label>
            <input
              type="text"
              class="form-control"
              name="nom_actividades"
              v-model="actividad.nom_actividades"
              id="nom_actividades"
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
              name="horaini"
              v-model="actividad.horaini"
              id="horaini"
              aria-describedby="helpId"
              placeholder=""
            />
          </div>

          <div class="form-group">
            <label for="">Fecha y hora fin:</label>
            <input
              type="datetime-local"
              class="form-control"
              name="horafin"
              v-model="actividad.horafin"
              id="horafin"
              aria-describedby="helpId"
              placeholder=""
            />
          </div>

          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Agregar</button>
            <router-link
              :to="{ name: 'ConsultarActividad' }"
              class="btn btn-warning"
              >Cancelar</router-link
            >
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
      proyectos: {},
      colaboradores: {},
    };
  },
  created: function () {
    this.consultarProyecto();
    this.consultarColaboradores();
  },

  methods: {
    agregarActividad() {
        const datosEnviar = {
          nom_actividades: this.actividad.nom_actividades,
          horaini: this.actividad.horaini,
          horafin: this.actividad.horafin, 
          proyectos: this.actividad.id_proyecto,
          colaboradores: this.actividad.id_colaborador,
        };
  
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(datosEnviar) 
        }

        console.log(datosEnviar);
        fetch('http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/actividades', options) 
        .then(response => response.json())
        .then(response => {
          console.log(response);
          window.location.href='ConsultarActividad'
        })
  
        .catch(err => console.error(err));
      },
    
    consultarProyecto() {
    //Se ingresa la URL de la API
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }
    fetch("http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/proyectos",options)
      //Los datos son guardados en formato JSON
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.proyectos = [];
        console.log(datosRespuesta);
        //if (typeof datosRespuesta[0].success === "undefined") {
          this.proyectos = datosRespuesta;
        //}
      })
      .catch(console.log);
    },

    consultarColaboradores() {
    //Se ingresa la URL de la API
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }
    fetch("http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/colaborador/todo",options)
      //Los datos son guardados en formato JSON
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.colaboradores = [];
        console.log(datosRespuesta);
        //if (typeof datosRespuesta[0].success === "undefined") {
          this.colaboradores = datosRespuesta;
        //}
      })
      .catch(console.log);
    },
    /*
      created: function () {
        this.consultArc();
      },
      consultArc() {
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };

        fetch(
          "http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/proyectos",
          options
        )
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            this.proyectos = [];
            console.log(datosRespuesta);
            //if (typeof datosRespuesta[0].success === "undefined") {
            this.proyectos = datosRespuesta;
            //}
          });
      },
    */
  },
};
</script>
