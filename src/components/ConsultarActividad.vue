<template>

    <div class="container">
        <div class="card">
            <div class="card-header">
                Actividades
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Actividad</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Proyecto</th>
                        <th>Colaborador</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="actividad in actividades" :key="actividad.id_actividad">
                            <td>{{ actividad.id_actividad }}</td>
                            <td>{{ actividad.nom_actividades }}</td>
                            <td>{{ actividad.horaini }}</td>
                            <td>{{ actividad.horafin }}</td>
                            <td>{{ actividad.nombre_proyecto }}</td>
                            <td>{{ actividad.nom_colaborador }}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="">
                            
                            <router-link :to="{name:'ActualizarColaborador', params:{id:actividad.id_actividad}}" class="btn btn-info">Editar</router-link>

                            <button
                                type="button"
                                v-on:click="borrarColaborador(actividad.id_actividad)"
                                class="btn btn-danger"
                            >
                                Eliminar
                            </button>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      actividades: [],
    };
  },
  //Llamamos al metodo consultarColaborador
  created: function () {
    this.consultarActividad();
  },
  //creamos el metodo consultarColaborador para consumir la API
  methods: {
    consultarActividad() {
      //Se ingresa la URL de la API
      const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      }
      fetch("http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/actividades",options)
        //Los datos son guardados en formato JSON
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.actividades = [];
          console.log(datosRespuesta);
          //if (typeof datosRespuesta[0].success === "undefined") {
            this.actividades = datosRespuesta;
          //}
        })
        .catch(console.log);
    },
    /*
    //creamos el metodo borrarColaborador para eliminar registros desde la API
    borrarColaborador(id) {
      console.log(id);
      const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };*/
  },
};
</script>