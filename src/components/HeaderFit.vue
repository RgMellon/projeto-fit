<template>
  <menu class="header">
      <div class="header-wrapper flex align-center">
        <h1> FIT LOJA </h1>
      </div>
  </menu>
</template>

<script>
  export default {
    name: 'HeaderFeat',
    data(){
       return {

      }
    },
  }
</script>

<style scoped>
  h1{
    font-family: 'Montserrat', sans-serif;
  }
  .header {
    width: 100%;
    box-shadow: 1px 1px 11px 0px rgba(162, 152, 152, 0.75);
    position: fixed;
    background: white;
    z-index: 4;
  }

  .header-wrapper{
    width: 100%;
    min-height: 60px;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
