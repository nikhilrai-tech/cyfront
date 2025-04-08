export default ({ app, store }, inject) => {
    inject('notifier', {
      showSnack ({ message = '', type = '', timeout=6000 }) {
        store.commit('showSnack', { message, type, timeout })
      }
    })
  }