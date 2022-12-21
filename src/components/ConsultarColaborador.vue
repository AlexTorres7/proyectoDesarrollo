<template>

    <div class="container">
        <div class="card">
            <div class="card-header">
                Colaboradores
            </div>
            <div class="card-body">
               <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Id Proyecto</th>
                        <th>Id Actividad</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cargo</th>
                        <th>Fecha</th>
                        <th>Hora</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="colaborador in colaboradores" :key="colaborador.id" >
                        <td> {{colaborador.id_colaborador}} </td>
                        <td> {{colaborador.id_proyecto}} </td>
                        <td>{{colaborador.id_actividad}} </td>
                        <td> {{colaborador.nom_colaborador}} </td>
                        <td> {{colaborador.apellido}} </td>
                        <td> {{colaborador.cargo_colaborador}} </td>
                        <td> {{colaborador.fecha.slice(0, 10)}} </td>
                        <td> {{colaborador.hora}} </td>
                    </tr>
                   
                </tbody>
               </table>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            colaboradores:[]
        }
    },
    created:function(){
        this.consultarColaborador();
    },
    methods:{
        consultarColaborador(){
            fetch('http://192.168.70.226:3000/api/colaboradores')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.colaboradores=[]
                if(typeof datosRespuesta[0].success==='undefined' )
                {
                    this.colaboradores=datosRespuesta;
                }

            })
            .catch(console.log)
        }
    }
}
</script>