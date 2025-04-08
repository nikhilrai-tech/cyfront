export const state = () => {
  // console.log('yes')
  
  return {
    user: null,
    app: {
        neon: false
    },
    persistedState: null,
    alert: false,
    navbar: false
    // snackbar: {
    //   show: true,
    //   message: '',
    //   type: '',
    //   timeout: 6000,
    // }
  }}

export const namespaced = true

export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },
    loggedInUser(state) {
        return state.auth.user
    },
};
  
export const mutations = {
    // LOGIN: (state, authUser) => {
    //     // console.log('User',authUser)
    //     if (authUser) {
    //         state.auth.user = authUser
    //     }
    //     else {
    //         state.auth.user = null
    //     }
    // },
    SET_STATE(state, payload) {
      state.persistedState = payload
    },
    SET_ALERT(state, payload) {
      state.alert = payload
    },
    showSnack (state, payload) {
      // console.log(payload.message)
      state.show = false
      state.message = payload.message
      state.type = payload.type
      state.timeout = payload.timeout || 6000
      state.show = true
    },
    clearSnack (state) {
      // console.log('clearing.....')
      state.message = ''
      state.type = ''
      state.timeout = 6000
      state.show = false
    },
    openNav (state) {
      state.navbar = true
    },
    closeNav (state) {
      state.navbar = true
    },
}


// export const actions = {
//     loginUser(context, data) {
//         console.log(data)
//         context.commit('LOGIN')
//     }
// }
  export const actions = {
    switchPersistanceState({ commit }, payload) {
      commit('SET_STATE', payload)
      commit('SET_ALERT', true)
    },
  }
  