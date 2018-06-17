<template>
  <div>
    <header-fit>
    </header-fit>

    <section class="flex space-center container">
      <campo-busca> </campo-busca>
    </section>

    <section class="container">

      <masonry :cols="{default: 3, 1000: 3, 700: 2, 430: 1}"
               :gutter="{default: '30px', 700: '15px'}" >

        <div class="plano flex space-center" v-for="p in resultadoPesquisa(getValorPesquisa)">
          <card-planos :titulo="p.nome" :img="p.img_path"> </card-planos>
        </div>

      </masonry>

    </section>

  </div>
</template>

<script>

  import { getAllPlanos } from '../service/getAllPlanos';
  import HeaderFit from '../components/HeaderFit';
  import  CardPlanos from '../components/CardPlanos';
  import  Busca from '../components/Busca';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    components: {
      'header-fit': HeaderFit,
      'card-planos' : CardPlanos,
      'campo-busca' : Busca,
    },

    name:'Page-Home',
    data(){
      return {
        planos: {},

      }
    },

    mounted(){
      getAllPlanos()
        .then(plano => this.setPlanos(plano));
    },

    computed: {
      ...mapGetters({
        resultadoPesquisa: 'buscaPlanos',
        getValorPesquisa: 'getValorPesquisa',
      })
    },

    methods: {
      ...mapActions({
        setPlanos: 'setPlanos',
      })
    }
  }


</script>

<style scoped>
  .container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

</style>
