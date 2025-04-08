export default function({ store, redirect, error, route }) { // obj
  if(['dashboard','leaderboards','programs-create','programs-starred','programs-private','p-edit','jobs-add', 'u','jobs-starred','staff','contact','settings','profile','inbox'].includes(route.name)) {
    // console.log('require ')
    if(!store.state.auth.user) {
      // console.log('not logged in')
      redirect('/')
      return;
    }
    if(['programs-create','p-edit','jobs-add','staff'].includes(route.name) && !store.state.auth.user.is_staff){
      // console.log('require company')
      redirect('/dashboard')
    }
  }
  // console.log(route.name)
    // if (isAuthenticated(store.state.auth.user) && notrequireAuthentication(route)){
    //   // console.log('he');
    //   redirect('/') 
    // }
    // if (!isAuthenticated(store.state.auth.user) && requireAuthentication(route)){
    //   redirect('/') 
    // }
    // else if (!isCompany(store.state.auth.user) && requireCompany(route)){
    //   // console.log(store.commit)
    //   // store.commit('showSnack', { message: 'Forbidden', type: 'error',timeout: 3000 })
    //   // error({
    //   //   statusCode: 401,
    //   //   message: 'Only Admin is allowed to access this page'
    //   // })
    //   // if route.name !==redirect('/') 
    // }
  }
  
  // function isAuthenticated(user) {
  //   return user
  // }
  
  // function requireAuthentication(route) {
  //   const rroutes = ['dashboard','leaderboards','programs','programs-create','programs-starred','programs-private','p','p-edit','jobs','jobs-add', 'u','hactivity',
  //   'jobs-starred','staff','contact','settings','profile','inbox']
  //   return rroutes.includes(route.name)
  // }
  
  // function notrequireAuthentication(route) {
  //   return ['login','register','register-hacker','register-company','forgot-password','resetpassword','verify','about','paymenthandler'].includes(route.name)
  // }
  
  // function isCompany(user) {
  //   return user && user.is_staff
  // }
  
  // function requireCompany(route) {
  //   return ['programs-create','p-edit','jobs-add','staff'].includes(route.name)
  // }