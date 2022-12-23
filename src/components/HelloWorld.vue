<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>

  <section id="inicio">
      <div class="head">
        <h1>Proyecto</h1>
        <h2>CRUD Colaboradores FRD</h2>
      </div>
  </section>
    <br>
  <footer style="background: #0e392d; font-size: small; padding: 22px 0 21px;"> <br> <center><p style="color: #F8F6F3;"> © 2022 Fundación Dondé Todos los Derechos Reservados.</p></center>
    <i class="fa-brands fa-facebook"></i>
  </footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

