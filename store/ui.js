const DEFAULT_STATE = {
  menuState: false,
  popCreateState:false,
  popAlertData: {
    state:false,
    type: null,
    title: null,
    msg: null,
    btn:{
      link:'',
      name:null,
      fnName:null,
    }
  },
};

export default {
  namespaced: true,
  state: () => ({ ...DEFAULT_STATE }),
  mutations: {
    UPDATE_STATE(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    setMenuState({ commit }, payload) {
      commit('UPDATE_STATE', { menuState: payload });
    },
    setPopAlertData({ commit }, payload) {
      commit('UPDATE_STATE', { popAlertData: payload });
    },
    setPopCreateState({ commit }, payload) {
      commit('UPDATE_STATE', { popCreateState: payload });
    },
  },
};
