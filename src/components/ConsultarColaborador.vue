<template>
  <!--Tabla de colaboradores-->
  <div class="container">
    <div class="card">
      <div class="card-header">Colaboradores</div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cargo</th>
              <th>Fecha Inicial</th>
              <th>Fecha Final</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="colaborador in colaboradores" :key="colaborador.id_colaborador">
              <td>{{ colaborador.id_colaborador }}</td>
              <td>{{ colaborador.nom_colaborador }}</td>
              <td>{{ colaborador.apellido }}</td>
              <td>{{ colaborador.cargo_colaborador }}</td>
              <td>
                {{
                  colaborador.fechaini == null
                    ? "N/A"
                    : colaborador.fechaini.slice(0, 10)
                }}
              </td>
              <td>
                {{
                  colaborador.fechafin == null
                    ? "N/A"
                    : colaborador.fechafin.slice(0, 10)
                }}
              </td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                
                 <router-link :to="{name:'ActualizarColaborador', params:{id:colaborador.id_colaborador}}" class="btn btn-info">Editar</router-link>

                  <button
                    type="button"
                    v-on:click="borrarColaborador(colaborador.id_colaborador)"
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
      colaboradores: [],
    };
  },
  //Llamamos al metodo consultarColaborador
  created: function () {
    this.consultarColaborador();
  },
  //creamos el metodo consultarColaborador para consumir la API
  methods: {
    consultarColaborador() {
      //Se ingresa la URL de la API
      fetch("http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/colaboradores")
        //Los datos son guardados en formato JSON
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.colaboradores = [];
          if (typeof datosRespuesta[0].success === "undefined") {
            this.colaboradores = datosRespuesta;
          }
        })
        .catch(console.log);
    },
    //creamos el metodo borrarColaborador para eliminar registros desde la API
    borrarColaborador(id) {
      console.log(id);
      const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };

      fetch(`http://ec2-52-55-99-170.compute-1.amazonaws.com:3000/api/colaboradores/${id}`, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          window.location.href = "ConsultarColaborador";
        })
        .catch((err) => console.error(err));

      /* fetch('http://10.60.63.122:3001/api/colaboradores/?borrar='+id)
            //Los datos son gusrdados en formato JSON
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
               window.location.href="ConsultarColaborador"

            })
            .catch(console.log) */
    },

  },
};
</script>
