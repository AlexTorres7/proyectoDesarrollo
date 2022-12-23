<template>

    <!--Formulario para la captura de datos del prospecto-->
  
    <div class="container">
  
      <div class="card">
  
        <div class="card-header">Agregar Nuevo Colaborador</div>
  
        <div class="card-body">
  
          <form v-on:submit.prevent="agregarColaborador">
  
            <div class="form-group">



  
              <label for="">Nombre:</label>
  
              <input type="text" class="form-control" name="nom_colaborador" v-model="colaborador.nom_colaborador" id="nom_colaborador" aria-describedby="helpId" placeholder=""/>
                                                                            
              <small id="helpId" class="form-text text-muted">Escribe el nombre de colaborador</small>
  
            </div>
  
  
  
            <div class="form-group">
  
              <label for="">Apellido:</label>
  
              <input type="text" class="form-control" name="apellido" v-model="colaborador.apellido" id="apellido" aria-describedby="helpId" placeholder=""/>
  
              <small id="helpId" class="form-text text-muted">Escribe el apellido completo del colaborador</small>
  
            </div>
  
  
  
            <div class="form-group">
  
              <label for="">Cargo:</label>
  
              <input type="text" class="form-control" name="cargo" v-model="colaborador.cargo_colaborador" id="cargo" aria-describedby="helpId" placeholder=""/>
  
              <small id="helpId" class="form-text text-muted">Escribe el cargo el colaborador</small>
  
            </div>
  
  
  
            <div class="form-group">
  
              <label for="">Email:</label>
  
              <input type="email" class="form-control" name="mail" v-model="colaborador.mail" id="mail" aria-describedby="helpId" placeholder=""/>
               
              <small id="helpId" class="form-text text-muted">Escribe el email el colaborador</small>
  
            </div>
  
  
  
            <div class="form-group">
  
                <label for="">Télefono:</label>
  
              <input type="text" class="form-control" name="telefono" v-model="colaborador.telefono" id="telefono" aria-describedby="helpId" placeholder=""/>
  
              <small id="helpId" class="form-text text-muted">Ingrese el télefono del colaborador</small>
  
            </div>
  
  
  
            <div class="form-group">
  
              <label for="">Fecha Inicio:</label>
  
              <input type="date" class="form-control" name="fechafin" v-model="colaborador.fechaini" id="fechaini" aria-describedby="helpId" placeholder=""/>
  
              <small id="helpId" class="form-text text-muted">Ingrese la fecha de Inicio</small>
  
            </div>
  
  
  
            <div class="form-group">
  
              <label for="">Fecha Final:</label>
  
              <input type="date" class="form-control" name="fechafin" v-model="colaborador.fechafin" id="fechafin" aria-describedby="helpId" placeholder=""/>
  
              <small id="helpId" class="form-text text-muted">Ingrese la fecha final</small>
  
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
  
  
  
  tiene menú contextual
  