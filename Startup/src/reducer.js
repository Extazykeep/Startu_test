export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'set':
      return  state = action.userData;  
    default:
      return    
  }
}