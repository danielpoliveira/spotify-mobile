import Spotify from '../Spotify';

const INITIAL_STATE = { 
  index: 0, 

  playMusic: false,  

  track: {
    album_name  : "",
    album_uri   : "",
    artist_name : "",
    artist_uri  : "",
    duration    : undefined,
    image_uri   : "",
    is_episode  : undefined,
    is_podcast  : undefined,
    track_name  : "",
    track_uri   : ""
  },
  
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'MUSIC_CHANGED': 
      
      return {
        ...state,
        playMusic: !change? true: state.playMusic,
        index: action.payload
      };

    case 'MUSIC_PLAYED_OR_PAUSED':      
      Spotify.onPlayPause();
    
      return {
        ...state,
        playMusic: !state.playMusic,
      };

    case 'GETTED_CURRENT_TRACK':
      return {
        ...state,
        track: action.payload,
      }
    
    default:              
      return state;
  }
}