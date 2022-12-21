import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

let boton = document.getElementById('boton-agregar')
boton.addEventListener('click', cambioPantalla)

function cambioPantalla(){
    let  alta  = document.getElementById('alta')
    alta.style.display = "none"
}