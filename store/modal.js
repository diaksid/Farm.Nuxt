export const state = () => ({
  login: false,
  signIn: false
});


export const mutations = {
  setLogin (state, value) {
    state.login = value
  },
  toggleLogin (state) {
    state.login = !state.login
  },

  setSignIn (state, value) {
    state.signIn = value
  },
  toggleSignIn (state) {
    state.signIn = !state.signIn
  }
};
