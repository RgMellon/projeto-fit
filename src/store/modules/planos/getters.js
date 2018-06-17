export default {

  buscaPlanos: state => termo => {
    if(termo){
      let exp = new RegExp(termo, 'i');
      return state.planos.filter(res => exp.test(res.nome))
    }else{
      return state.planos;
    }
  },

  getValorPesquisa(state) {
    return state.valorPesquisa;
  }

}
