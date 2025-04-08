export default function ({ $axios, app,$nuxt, redirect }, inject) {
    // console.log($axios.post)
    // console.log($axios.$post)
    $axios.onResponse((resp) => {
      if(resp.data.error){
      // console.log('showing snack...')
        app.store.commit('showSnack', { message: resp.data.message, type: 'error',timeout: 3000 })
      }
      else{
        // console.log(resp)
        const show = resp.data.show
        if(show){
          app.store.commit('showSnack', { message: resp.data.message ? resp.data.message : 'Success', type: resp.data.type ? resp.data.type : 'success',timeout: 3000 })
        }
      }
    })

    $axios.onError((error) => {
        console.log('error on axios',error.config ? error.config.url : '')
        if(error.response){
          // console.log(error.response.status)
          const errorings = {
            404: 'URL Not Found',
            401: 'Session Expired, Please Login Again',
            500: 'Something went wrong',
            405: 'Request went wrong',
            403: 'Forbidden',
          }
          app.store.commit('showSnack', { message: errorings[error.response.status], type: 'error',timeout: 5000 })
        }
        else{
          app.store.commit('showSnack', { message: 'Something went wrong', type: 'error',timeout: 5000 })
        }
        try{
          if (error.response.status === 401) {
            // console.log('resp',error.response.status)
            if(app.$auth){
                app.$auth.strategy.token.reset()
            }
          }
        }
        catch {
          app.store.commit('showSnack', { message: 'Something went wrong', type: 'error',timeout: 5000 })
        }
    })
    // $axios.onRequestError((error) => {
    //     console.log('Req Error ',error)
    //     app.store.commit('showSnack', { message: 'Something went wrong', type: 'error',timeout: 3000 })
    // })
    // $axios.onResponseError((error) => {
    //     console.log('Response Error ',error)
    //     app.store.commit('showSnack', { message: 'Something went wrong', type: 'error',timeout: 3000 })
    //     return 0;
    // })
  }