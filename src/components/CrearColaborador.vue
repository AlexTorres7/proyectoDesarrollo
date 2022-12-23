<template>
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
    
          <form class="row g-3" v-on:submit.prevent="agregarColaborador">
              <div class="col-md-4">
<!---------------------------------------------nombre de colaborador-------------------------------------------------------------------->
               <center><label for="nombre" class="form-label">Nombre del colaborador:</label></center> 
                <input type="text" name="nom_colaborador"  v-model="colaborador.nom_colaborador" id="nom_colaborador" class="form-control" tabindex="1" autofocus autocomplete="off" placeholder="Mauricio Gabriel"  required>
              </div>
<!---------------------------------------------primer apellido-------------------------------------------------------------------->
              <div class="col-md-4">
                <center><label for="apellido_pat" class="form-label">Apellidos:</label></center>
                <input type="text" name="apellido" v-model="colaborador.apellido" id="apellido" class="form-control" tabindex="1" autofocus autocomplete="off" placeholder="Poot Canul" required>
              </div>
           
           
<!---------------------------------------------cargo-------------------------------------------------------------------->               
              <div class="col-md-3">
                <center><label for="inputAddress" class="form-label">Cargo:</label></center>
                <input type="text" name="cargo" v-model="colaborador.cargo_colaborador" id="cargo" class="form-control" tabindex="1" autofocus  autocomplete="off" placeholder="chalam" required>
              </div>
 <!---------------------------------------------Email-------------------------------------------------------------------->  
              <div class="col-md-4">
                <center> <label for="inputAddress2" class="form-label">Email:</label></center>
               
                <input type="email" name="email" v-model="colaborador.mail" id="mail" class="form-control"  tabindex="1" autofocus autocomplete="off" placeholder="anastacio@frd.org.mx" required>
              </div>
<!---------------------------------------------Telefono-------------------------------------------------------------------->              
              <div class="col-md-4">
                <center><label for="inputCity"  class="form-label">Télefono:</label></center>
                
                <input type="text" name="telefono" v-model="colaborador.telefono" id="telefono" class="form-control" tabindex="1" autofocus placeholder="991123432">
              </div>

 <!---------------------------------------------fecha inicio--------------------------------------------------------------------> 
              <div class="col-md-4">
                <center><label for="inputCity" class="form-label">Fecha Inicio:</label></center>
                
                <input type="datetime-local" name="fechafin" v-model="colaborador.fechaini" id="fechaini" class="form-control" tabindex="1" autofocus autocomplete="off" placeholder="12-12-2022">
              </div>
 <!---------------------------------------------  Fecha final--------------------------------------------------------------------> 
              <div class="col-md-4">
                <center><label for="inputCity" class="form-label">Fecha Final:</label></center>
                
                <input type="datetime-local" name="fechafin" v-model="colaborador.fechafin" id="fechafin" class="form-control" tabindex="1" autofocus  autocomplete="off" placeholder="12-12-2023" required>
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
  <!-----------------------------------------------------------------botones para salir y guardar-->
              <center><button style="position: right: 400px; bottom:1%;" type="submit" class="btn btn-danger">Salir</button> <button style="position:left: 1000px; bottom:1%;" type="submit" class="btn btn-success">Guardar</button></center> 
              </div>
              
        </form>
      </div>   
    </div>
</div>
<br>
<footer style="background: #0e392d;  padding: 10px 0 5px;"> 
  <br> 
  <center>
    <p style="color: #F8F6F3; font-size: small;"> © 2022 Fundación Dondé Todos los Derechos Reservados. <i class="fa-brands fa-facebook"></i></p>
  </center>
 
</footer>
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



      fetch('http://10.60.63.122:3001/api/colaboradores', options)

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