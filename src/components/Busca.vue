<template>

  <div>
    <div class="float-label busca flex">
      <input id="busca" type="search"
             required v-model="valorBusca" @input="this.pesquisaConteudo">
      <label for="busca"> <i class="fas fa-search"> </i> Digite o nome do produto</label>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'Busca',
    data(){
      return {
        valorBusca: '',
      }
    },
    methods: {
      ...mapActions({
        pesquisaAction: 'pesquisa'
      }),
      pesquisaConteudo(){
        this.pesquisaAction(this.valorBusca);
      }
    }
  }
</script>

<style scoped>

  .busca {
    margin-top: 6rem;
  }

  .float-label {
    position: relative;
    height: 40px;
    width: 500px;
  }

  .float-label label,
  .float-label input {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    border: 0px;
  }

  .float-label input {
    border-bottom: 1px solid #897e7ede;
    height: 40px;
    outline: none;
  }

  .float-label label {
    transition-duration: 0.2s;
    left: 2px;
    top: 2rem;
    color: #897e7ede;
  }

  .float-label input {
    top: 17px;
  }

  .float-label input:valid + label {
    top: 4px;
    color: #ff8c3e;
  }

  input:focus {
    border-bottom: 1px solid #ff8c3e;
  }

</style>
