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

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>