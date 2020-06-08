const INITIAL_STATE = { index: 0 }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'MUSIC_CHANGED': return {...state, index: action.payload};
    default:              return state;
  }
}