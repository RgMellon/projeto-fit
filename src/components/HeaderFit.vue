<template>
  <div>
    <menu class="header">
        <div class="header-wrapper flex align-center space-between">
          <h1> FIT LOJA </h1>
          <div class="menu-expande flex space-center " @click="expandeMenu">
            <div v-if="!this.clicado" class=" flex space-center">
                <i class="fas fa-bars menu-barra self-center" ></i>
            </div>
            <div v-if="this.clicado" class=" flex space-center align-center">
                <i class="fas fa-times menu-barra self-center"></i>
            </div>
          </div>
        </div>
    </menu>
    <div v-if="this.clicado" class="conteudo-escondido flex column align-center">
        <div class="conteudo-wrapper">

        </div>
    </div>
  </div>
</template>

<script>
  import Busca from './Busca';
  export default {
    components: {
      'campo-busca' : Busca,
    },
    name: 'HeaderFeat',
    data(){
      return {
        clicado: false,
      }
    },
    methods:{
      expandeMenu(){
        this.clicado =  !this.clicado;
      }
    }
  }
</script>

<style scoped>
  .conteudo-wrapper{
    height: 80px;
    width: 100%;
  }
  .conteudo-escondido{
    height:200px;
    background: #f29e211a;
  }
  h1{
    font-family: 'Montserrat', sans-serif;
    margin-left: 1rem;
  }
  .menu-expande{
    width: 40px;
    height: 40px;
    background: #f4f4ed;
    margin-right: 1rem;
    border-radius: 50%;
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
  .menu-barra{
    display: block;
    font-size: 1.2rem;
  }

  @media(min-width: 1000px){
    .menu-barra{
      display: none;
    }
    .menu-expande{
      display: none;
    }


  }
</style>
