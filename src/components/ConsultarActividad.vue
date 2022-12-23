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
                        <th>ID</th>
                        <th>Nom. Proyecto</th> <!--COMBOBOX-->
                        <th>Nom. Colaborador</th>   <!--COMBOBOX-->
                        <th>Actividad</th>
                        <th>Fecha y hora de inicio</th>
                        <th>Fecha y hora de final</th>
                        <th>Duración</th>
                    </tr>
                </thead>
                <!--
                <tbody>
                    <tr v-for="colaborador in colaboradores" :key="id_actividades" >
                        <td> {{colaborador.id}} </td>
                        <td> {{colaborador.proyecto}} </td>
                        <td>{{colaborador.cantColab}} </td>
                        <td> {{colaborador.cantHrsPro}} </td>
                        <td> {{colaborador.cantHrsComp}} </td>
                    </tr>                   
                </tbody>
            -->
               </table>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
  name: 'ConsultarActividad',
  props: {
    msg: String
  }
}
</script>