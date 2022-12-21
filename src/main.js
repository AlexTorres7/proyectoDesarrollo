import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

let btnInicio = document.getElementById('btn-logo')
btnInicio.addEventListener('click',Reinicio)

function Reinicio(){
    location.reload()
}

let btnColaboradores = document.getElementById('btn-colaboradores')
btnColaboradores.addEventListener('click', PantallaModuloColaboradores)

function PantallaModuloColaboradores(){
    let  moduloColaboradores  = document.getElementById('modulo-colaboradores')
    moduloColaboradores.style.display = "initial"

    let moduloInicio = document.getElementById('inicio')
    moduloInicio.style.display = "none"

    let moduloRegistro = document.getElementById('registro')
    moduloRegistro.style.display = "none"
}

let btnRegistrar = document.getElementById('btn-registrar')
btnRegistrar.addEventListener('click', Registro)

function Registro(){
    let moduloRegistro = document.getElementById('registro')
    moduloRegistro.style.display = "initial"

    let  moduloColaboradores  = document.getElementById('modulo-colaboradores')
    moduloColaboradores.style.display = "none"

}

let btnCancelar = document.getElementById('btn-cancelar')
btnCancelar.addEventListener('click', PantallaModuloColaboradores)
