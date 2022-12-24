<template>

    <div class="container">
        <div class="card">
            <div class="card-header">
                Proyectos
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Proyecto</th>
                        <th>Tipo de proyecto</th>
                        <th>Descripción</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="proyecto in proyecto" :key="proyecto.id_proyecto">
                            <td>{{ proyecto.id_proyecto }}</td>
                            <td>{{ proyecto.nombre_proyecto }}</td>
                            <td>{{ proyecto.tipo_proyecto }}</td>
                            <td>{{ proyecto.descripcion_proyecto }}</td>
                            <td>{{ proyecto.fechaini }}</td>
                            <td>{{ proyecto.fechafin }}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="">
                            
                            <router-link :to="{name:'ActualizarColaborador', params:{id:proyecto.id_proyecto}}" class="btn btn-info">Editar</router-link>

                            <button
                                type="button"
                                v-on:click="borrarProyecto(proyecto.id_proyecto)"
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
      proyecto: [],
    };
  },
  //Llamamos al metodo consultarColaborador
  created: function () {
    this.consultarProyecto();
  },
  //creamos el metodo consultarColaborador para consumir la API
  methods: {
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
          this.proyecto = [];
          console.log(datosRespuesta);
          //if (typeof datosRespuesta[0].success === "undefined") {
            this.proyecto = datosRespuesta;
          //}
        })
        .catch(console.log);
    },
    borrarProyecto(id) {
      console.log(id);
      const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };

      fetch('http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/proyectos/'+id, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          window.location.href = "ConsultarProyecto";
        })

        .catch((err) => console.error(err));
    },
  },
};
</script>