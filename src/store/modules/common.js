export default {
  namespaced: false, // 命名空间
  state: {
    isOpen: false
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    updateIsOpen(state, isOpen) {
      state.isOpen = isOpen
    }
  }
}