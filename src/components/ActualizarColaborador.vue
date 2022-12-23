<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  />
  <div class="container" style="background-color: #f9f9f9">
    <div>
      <BR></BR>
      <center><p style="font-size: x-large"></p></center>
    </div>
    <div><br /></div>
    <!--Formulario para la captura de datos del prospecto-->
    <div class="card text-dark bg-light mb-3">
      <div style="background-color: #109905" class="card-header">
        <center>
          <p style="font-size: x-large; color: #f9f9f9">
            Actualizar Colaboradores
          </p>
        </center>
      </div>
      <div class="card-body" style="background-color: #f8f6f3">
        <form
          v-on:submit.prevent="actualizarColaborador"
          class="row g-3"
          id="insert-form"
        >
          <div class="col-md-4">
            <center>
              <label for="nombre" class="form-label"
                >Nombre del colaborador:</label
              >
            </center>
            <input
              type="text"
              name="nom_colaborador"
              v-model="colaborador.nom_colaborador"
              id="nom_colaborador"
              class="form-control"
              tabindex="1"
              autofocus
              autocomplete="off"
              required
            />
          </div>
          <div class="col-md-4">
            <center>
              <label for="apellido_pat" class="form-label">Apellidos:</label>
            </center>

            <input
              type="text"
              name="pellido"
              v-model="colaborador.apellido"
              id="apellido"
              class="form-control"
              tabindex="1"
              autofocus
              autocomplete="off"
              required
            />
          </div>

          <div class="col-md-3">
            <center>
              <label for="inputAddress" class="form-label">Cargo:</label>
            </center>
            <input
              type="text"
              name="cargo_colaborador"
              v-model="colaborador.cargo_colaborador"
              id="cargo"
              class="form-control"
              tabindex="1"
              autofocus
              autocomplete="off"
              required
            />
          </div>
          <div class="col-md-3">
            <center>
              <label for="inputAddress2" class="form-label">Email:</label>
            </center>

            <input
              type="email"
              name="mail"
              v-model="colaborador.mail"
              id="mail"
              class="form-control"
              tabindex="1"
              autofocus
              autocomplete="off"
              required
            />
          </div>
          <div class="col-md-3">
            <center>
              <label for="inputCity" class="form-label">Télefono:</label>
            </center>

            <input
              type="text"
              name="telefono"
              v-model="colaborador.telefono"
              id="telefono"
              class="form-control"
              tabindex="1"
              autofocus
            />
          </div>
          <div class="col-md-3">
            <center>
              <label for="inputCity" class="form-label">Fecha Inicio:</label>
            </center>

            <input
              type="text"
              name="fechaini"
              v-model="colaborador.fechaini"
              id="fechaini"
              class="form-control"
              tabindex="1"
              autofocus
              autocomplete="off"
              required
            />
          </div>
          <div class="col-md-3">
            <center>
              <label for="inputCity" class="form-label">Fecha Final:</label>
            </center>

            <input
              type="text"
              name="fechafin"
              v-model="colaborador.fechafin"
              id="fechafin"
              class="form-control"
              tabindex="1"
              autofocus
              autocomplete="off"
            />
          </div>

          <BR></BR>

          <div>
            <br />
            <center>
              <button type="submit" class="btn btn-success">Editar</button>
              <router-link
                :to="{ name: 'ConsultarColaborador' }"
                class="btn btn-warning"
                >Cancelar</router-link
              >
            </center>
          </div>
        </form>
      </div>
    </div>
  </div>
  <br />
  <footer style="background: #0e392d; font-size: small; padding: 10px 0 1px">
    <br />
    <center>
      <p style="color: #f8f6f3">
        © 2022 Fundación Dondé Todos los Derechos Reservados.
      </p>
    </center>
    <i class="fa-brands fa-facebook"></i>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      colaborador: {},
    };
  },
  created: function () {
    this.obtenerInformaciónID();
  },
  methods: {
    obtenerInformaciónID() {
      //Se ingresa la URL de la API
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch(
        "http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/colaboradores/" +
          this.$route.params.id,
        options
      )
        //Los datos son guardados en formato JSON
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          /* console.log(datosRespuesta); */
          const fechaI = new Date(datosRespuesta.fechaini);
          const fechaF = new Date(datosRespuesta.fechafin);
          const fechaini = fechaI.toLocaleString();
          const fechafin = fechaF.toLocaleString();
          const datos = {
            ...datosRespuesta,
            fechaini:fechaini.slice(0,10),
            fechafin,
          }
          console.log(datos)
          this.colaborador = datos;
        })
        .catch(console.log);
    },
  },
};
</script>
