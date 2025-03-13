const istate = {
    username: 'Guest',
    password: '',
    storecred: ['Guest'],
  
  }
  export function RegisterReducer(state = istate, action) {
    console.log("action=", action)
    console.log("state=", state)
    switch (action.type) {
  
      case 'LOGIN':
        state.username = action.payload.username;
        state.password = action.payload.password;
        state.storecred.push(action.payload.username)
  
        return {
          username: action.payload.username,
          password: action.payload.password,
          storecred: state.storecred,
         
        }
        default:
          return state
    }
}