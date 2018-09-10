export const state = () => ({
  type: null,
  message: null
});


export const mutations = {
  set (state, notify) {
    [state.type, state.message] = notify
  },

  clear (state) {
    state.type = state.message = null
  }
};
