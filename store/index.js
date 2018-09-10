export const state = () => ({
  themeDark: false,
  drawerAppMini: true,
});


export const mutations = {
  toggleThemeDark (state) {
    state.themeDark = !state.themeDark
  },

  setDrawerAppMini (state, value) {
    state.drawerAppMini = value
  },
  toggleDrawerAppMini (state) {
    state.drawerAppMini = !state.drawerAppMini
  }
};
