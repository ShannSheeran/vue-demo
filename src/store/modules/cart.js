import * as types from '../mutations'

const state = {
  added: 0,
  checkoutStatus: null
}

// getters
const getters = {
  added: state=>state.added,
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]

  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART](state){
    state.added++;
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
