<template>
  <div class="card-plano">
    <h1 class="titulo-plano flex space-center"> {{ titulo }}</h1>
    <img :src="`${this.url}/${this.img}`">
  </div>
</template>

<script>
  export default {
    props:['titulo', 'img'],
    name: 'CardPlanos',
    data(){
      return {
        url: '../src/assets'
      }
    },
  }
</script>

<style scoped>
    h1{
      font-size: 1.2rem;
      color: gray;
      margin-bottom: 0.5rem;
    }
    .card-plano {
      width: 220px;
      margin-top: 4rem;

    }

    img{
       box-shadow: 4px 1px 4px 0px rgba(162, 152, 152, 0.75)
    }
</style>
