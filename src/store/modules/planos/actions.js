export default {

  pesquisa(context, value){
    context.commit('PESQUISA_PLANO', value)
  },

  setPlanos(context, value){
    context.commit('SET_PLANO', value);
  }

}
