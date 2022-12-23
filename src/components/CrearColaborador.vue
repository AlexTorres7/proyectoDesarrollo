<template>
<<<<<<< HEAD
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
   <div class="container" style="background-color: #f9f9f9;">
    <div>
      <BR></BR>
     <center><p style="font-size: x-large;">Capturar Colaboradores</p></center> 
    </div>

<!--Formulario para la captura de datos del prospecto-->
    <div class="card text-dark bg-light mb-3">
        <div   style="background-color:#109905" class="card-header" >
        <center> <p  style=" font-size: x-large; color:#f9f9f9"> Nuevo Registro</p></center>
        </div>
      <div class="card-body" style="background-color:#F8F6F3">
    
          <form class="row g-3" id="insert-form" method="POST">
              <div class="col-md-4">
               <center><label for="nombre" class="form-label">Nombre del colaborador:</label></center> 
                <input type="text" name="nombre" class="form-control" tabindex="1" autofocus autocomplete="off" required>
              </div>
              <div class="col-md-4">
                <center><label for="apellido_pat" class="form-label">Primer apellido:</label></center>
                
                <input type="text" name="apellido_pat" class="form-control" tabindex="1" autofocus autocomplete="off" required>
              </div>
              <div class="col-md-4">
                <center><label for="apellido_pat" class="form-label">Segundo apellido:</label></center>
                
                <input type="text" name="apellido_mat" class="form-control" tabindex="1" autofocus autocomplete="off">
              </div>
              <div class="col-md-3">
                <center><label for="inputAddress" class="form-label">Cargo:</label></center>
                <input type="text" name="cargo" class="form-control" tabindex="1" autofocus  autocomplete="off" required>
              </div>
              <div class="col-md-3">
                <center> <label for="inputAddress2" class="form-label">Email:</label></center>
               
                <input type="email" name="email" class="form-control"  tabindex="1" autofocus autocomplete="off" required>
              </div>
              <div class="col-md-3">
                <center><label for="inputCity"  class="form-label">Télefono:</label></center>
                
                <input type="text" name="telefono" class="form-control" tabindex="1" autofocus>
              </div>
              <div class="col-md-3">
                <center><label for="inputCity" class="form-label">Área:</label></center>
                
                <input type="text" name="area" class="form-control" tabindex="1" autofocus autocomplete="off" required>
              </div>
              <div class="col-md-3">
                <center><label for="inputCity" class="form-label">Fecha:</label></center>
                
                <input type="text" name="fecha" class="form-control" tabindex="1" autofocus autocomplete="off">
              </div>
              <div class="col-md-3">
                <center><label for="inputCity" class="form-label">Hora:</label></center>
                
                <input type="text" name="hora" class="form-control" tabindex="1" autofocus  autocomplete="off" required>
              </div>
              <BR></BR>
             <!-- <center class="col-9">
                <input type="submit" class="btn btn-success btn-lg" style="background-color: #109905;" name="save" id="save" value="Guardar"/>

                <a class="btn btn-success btn-lg salir" style="background-color: #CB0C0C; color: black; text-align: right"  >Salir <i class="bi bi-box-arrow-right me-2"></i></a>
              </center>
            <center ><button style="position: absolute; left: 600px; bottom:4%;" type="submit" class="btn btn-success">Success</button> <button  style="position: absolute; right: 600px; bottom:4%;" type="submit" class="btn btn-danger">Danger</button></center> 
            -->
              
              <div  >
                <br>
      
              <center><button style="position: right: 400px; bottom:1%;" type="submit" class="btn btn-danger">Salir</button> <button style="position:left: 1000px; bottom:1%;" type="submit" class="btn btn-success">Guardar</button></center> 
              </div>
              
=======
  <!--Formulario para la captura de datos del prospecto-->
  <div class="container">
    <div class="card">
      <div class="card-header">Agregar Nuevo Colaborador</div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarColaborador">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="nom_colaborador"
              v-model="colaborador.nom_colaborador"
              id="nom_colaborador"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted"
              >Escribe el nombre de colaborador</small
            >
          </div>

          <div class="form-group">
            <label for="">Apellido:</label>
            <input
              type="text"
              class="form-control"
              name="apellido"
              v-model="colaborador.apellido"
              id="apellido"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted"
              >Escribe el apellido completo del colaborador</small
            >
          </div>

          <div class="form-group">
            <label for="">Cargo:</label>
            <input
              type="text"
              class="form-control"
              name="cargo"
              v-model="colaborador.cargo_colaborador"
              id="cargo"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted"
              >Escribe el cargo el colaborador</small
            >
          </div>

          <div class="form-group">
            <label for="">Email:</label>
            <input
              type="email"
              class="form-control"
              name="mail"
              v-model="colaborador.mail"
              id="mail"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted"
              >Escribe el email el colaborador</small
            >
          </div>

          <div class="form-group">
            <label for="">Télefono:</label>
            <input
              type="text"
              class="form-control"
              name="telefono"
              v-model="colaborador.telefono"
              id="telefono"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted"
              >Ingrese el télefono del colaborador</small
            >
          </div>

          <div class="form-group">
            <label for="">Fecha Inicio:</label>
            <input
              type="date"
              class="form-control"
              name="fechafin"
              v-model="colaborador.fechaini"
              id="fechaini"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted"
              >Ingrese la fecha de Inicio</small
            >
          </div>

          <div class="form-group">
            <label for="">Fecha Final:</label>
            <input
              type="date"
              class="form-control"
              name="fechafin"
              v-model="colaborador.fechafin"
              id="fechafin"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted"
              >Ingrese la fecha final</small
            >
          </div>

          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Agregar</button>
            <router-link :to="{name:'ConsultarColaborador'}" class="btn btn-warning">Cancelar</router-link>
          </div>
>>>>>>> master
        </form>
      </div>
    </div>
<<<<<<< HEAD
</div>
<br>
<footer style="background: #0e392d;  padding: 10px 0 5px;"> 
  <br> 
  <center>
    <p style="color: #F8F6F3; font-size: small;"> © 2022 Fundación Dondé Todos los Derechos Reservados. <i class="fa-brands fa-facebook"></i></p>
  </center>
 
</footer>
=======
  </div>
>>>>>>> master
</template>

<script>
export default {
  data() {
    return {
      colaborador: {},
    };
  },
  methods: {
    agregarColaborador() {
      /* console.log(this.colaborador); */
      const datosEnviar = {
        nom_colaborador: this.colaborador.nom_colaborador,
        apellido: this.colaborador.apellido,
        cargo_colaborador: this.colaborador.cargo_colaborador,
        mail: this.colaborador.mail,
        telefono: this.colaborador.telefono,
        fechaini: this.colaborador.fechaini,
        fechafin: this.colaborador.fechafin
      };

      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datosEnviar)
      }

      console.log(datosEnviar);

      fetch('http://ec2-52-55-99-170.compute-1.amazonaws.com:8080/api/colaboradores', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        window.location.href='ConsultarColaborador'
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
