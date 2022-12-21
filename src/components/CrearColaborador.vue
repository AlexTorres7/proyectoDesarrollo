<template>
   <div class="container" style="background-color: #f9f9f9;">
    <div>
      <BR></BR>
      <h1 class="display-4">Captura de Colaboradores</h1>
    </div>

<!--Formulario para la captura de datos del prospecto-->
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">
          Nuevo Registro
        </div>
      <div class="card-body">
    
          <form class="row g-3" id="insert-form" method="POST">
              <div class="col-md-4">
                <label for="nombre" class="form-label">Nombre del colaborador:</label>
                <input type="text" name="nombre" class="form-control" tabindex="1" autofocus autocomplete="off" required>
              </div>
              <div class="col-md-4">
                <label for="apellido_pat" class="form-label">Primer apellido:</label>
                <input type="text" name="apellido_pat" class="form-control" tabindex="1" autofocus autocomplete="off" required>
              </div>
              <div class="col-md-4">
                <label for="apellido_pat" class="form-label">Segundo apellido:</label>
                <input type="text" name="apellido_mat" class="form-control" tabindex="1" autofocus autocomplete="off">
              </div>
              <div class="col-md-3">
                <label for="inputAddress" class="form-label">Cargo:</label>
                <input type="text" name="cargo" class="form-control" tabindex="1" autofocus  autocomplete="off" required>
              </div>
              <div class="col-md-3">
                <label for="inputAddress2" class="form-label">Email:</label>
                <input type="email" name="email" class="form-control"  tabindex="1" autofocus autocomplete="off" required>
              </div>
              <div class="col-md-3">
                <label for="inputCity"  class="form-label">Télefono:</label>
                <input type="text" name="telefono" class="form-control" tabindex="1" autofocus>
              </div>
              <div class="col-md-3">
                <label for="inputCity" class="form-label">Área:</label>
                <input type="text" name="area" class="form-control" tabindex="1" autofocus autocomplete="off" required>
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">Fecha:</label>
                <input type="text" name="fecha" class="form-control" tabindex="1" autofocus autocomplete="off">
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">Hora:</label>
                <input type="text" name="hora" class="form-control" tabindex="1" autofocus  autocomplete="off" required>
              </div>
              <BR></BR>
              <center class="col-12">
                <input type="submit" class="btn btn-success btn-lg" style="background-color: #3DEE00;" name="save" id="save" value="Guardar"/>
                <a class="btn btn-success btn-lg salir" style="background-color: #F0FF00;">Salir <i class="bi bi-box-arrow-right me-2"></i></a>
              </center>
              
        </form>
      </div>   
    </div>
</div>
</template>
<script>
export default {
    
}
</script>