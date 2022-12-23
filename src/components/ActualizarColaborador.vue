<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet">
   <div class="container" style="background-color: #f9f9f9;">
    <div>
      <BR></BR>
     <center><p style="font-size: x-large;"></p></center> 
    </div>
<div><br></div>
<!--Formulario para la captura de datos del prospecto-->
    <div class="card text-dark bg-light mb-3">
        <div   style="background-color:#109905" class="card-header" >
        <center> <p  style=" font-size: x-large; color:#f9f9f9"> Actualizar Colaboradores</p></center>
        </div>
      <div class="card-body" style="background-color:#F8F6F3">
    
          <form class="row g-3" id="insert-form" method="POST">
              <div class="col-md-4">
<!---------------------------------------------nombre de colaborador-------------------------------------------------------------------->
               <center><label for="nombre" class="form-label">Nombre del colaborador:</label></center> 
                <input type="text" name="nombre" class="form-control" tabindex="1" autofocus autocomplete="off" placeholder="jorge" required>
              </div>
<!---------------------------------------------primer apellido-------------------------------------------------------------------->
              <div class="col-md-4">
                <center><label for="apellido_pat" class="form-label">Apellidos:</label></center>
                <input type="text" name="apellido_pat" class="form-control" tabindex="1" autofocus autocomplete="off" placeholder="pech basto" required>
              </div>
             
              <div class="col-md-4">
                <center><label for="inputAddress" class="form-label">Cargo:</label></center>
                <input type="text" name="cargo" class="form-control" tabindex="1" autofocus  autocomplete="off" placeholder="encargado DTI" required>
              </div>
              <div class="col-md-4">
                <center> <label for="inputAddress2" class="form-label">Email:</label></center>
               
                <input type="email" name="email" class="form-control"  tabindex="1" autofocus autocomplete="off" placeholder="jio_anastaci@frd.org.mx" required>
              </div>
              <div class="col-md-4">
                <center><label for="inputCity"  class="form-label">Télefono:</label></center>
                
                <input type="text" name="telefono" class="form-control" tabindex="1" placeholder="9911206912" autofocus>
              </div>

              <div class="col-md-3">
                <center><label for="inputCity" class="form-label">Fecha Inicio:</label></center>
                
                <input type="datetime-local" name=""  data-provide="datepicker" class="form-control" tabindex="1" autofocus autocomplete="off" placeholder="">
              </div>
              <div class="col-md-3">
                <center><label for="inputCity" class="form-label">Fecha Final:</label></center>
                
                <input type="datetime-local" name="" class="form-control" tabindex="1" autofocus  autocomplete="off" required placeholder="">
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
      
              <center> <button type="button" class="btn btn-warning">Actualizar</button></center> 
              </div>
              
        </form>
      </div>   
    </div>
</div>
<br>
<footer style="background: #0e392d; font-size: small;  padding: 10px 0 1px;"> <br> <center><p style="color: #F8F6F3;"> © 2022 Fundación Dondé Todos los Derechos Reservados.</p></center>
  <i class="fa-brands fa-facebook"></i>
</footer>
</template>
<script>
export default {
    
}
</script>
