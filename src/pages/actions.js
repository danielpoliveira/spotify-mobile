import Spotify from '../Spotify';

export const playPauseMusic = () => ({
  type: "MUSIC_PLAYED_OR_PAUSED",
});

export const changeMusic = value => {
  return dispatch => {
    value > 0 ? 
      Spotify.onNext() 
    : 
      Spotify.onPrev()

    setTimeout(() => dispatch(getCurrentTrack()), 400);
  };
}

export const getCurrentTrack = (value = false) => {
  return dispatch => {    
    (value ?
      Spotify.onStart() 
    : 
      Spotify.getTrack()
    ).then(res => dispatch({ type: 'GETTED_CURRENT_TRACK', payload: res }));
  }   
}