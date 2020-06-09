package com.spotifyrn;

import com.facebook.react.ReactActivity;
import androidx.appcompat.app.AppCompatActivity;

//import android.os.Bundle;

//import android.util.Log;

import com.facebook.react.ReactActivityDelegate;                           // Biblioteca necessária para o react-navigation
import com.facebook.react.ReactRootView;                                   // Biblioteca necessária para o react-navigation
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // Biblioteca necessária para o react-navigation

// import com.spotify.android.appremote.api.ConnectionParams;
// import com.spotify.android.appremote.api.Connector;
// import com.spotify.android.appremote.api.SpotifyAppRemote;

// import com.spotify.protocol.client.Subscription;
// import com.spotify.protocol.types.PlayerState;
// import com.spotify.protocol.types.Track;


public class MainActivity extends ReactActivity {

  // private static final String CLIENT_ID = "88411d7a4c714d84aba16fa0fdf18312";
  // private static final String REDIRECT_URI = "https://example.com/callback";
  // private SpotifyAppRemote mSpotifyAppRemote;

  @Override
  protected String getMainComponentName() {
    return "spotifyRN";
  }

  @Override                                                           // Necessário para o react-navigation
  protected ReactActivityDelegate createReactActivityDelegate() {     // Necessário para o react-navigation
    return new ReactActivityDelegate(this, getMainComponentName()) {  // Necessário para o react-navigation
      @Override                                                       // Necessário para o react-navigation
      protected ReactRootView createRootView() {                      // Necessário para o react-navigation
       return new RNGestureHandlerEnabledRootView(MainActivity.this); // Necessário para o react-navigation
      }
    };
  }
  
  /*protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
    //   setContentView(R.layout.activity_main);
  }*/

  /*@Override
  protected void onStart() {
      super.onStart();
      ConnectionParams connectionParams =
              new ConnectionParams.Builder(CLIENT_ID)
                      .setRedirectUri(REDIRECT_URI)
                      .showAuthView(true)
                      .build();

      SpotifyAppRemote.connect(this, connectionParams,
              new Connector.ConnectionListener() {

                  public void onConnected(SpotifyAppRemote spotifyAppRemote) {
                      mSpotifyAppRemote = spotifyAppRemote;
                      Log.d("MainActivity", "Connected! Yay!");

                      // Now you can start interacting with App Remote
                      connected();
                  }

                  public void onFailure(Throwable throwable) {
                      Log.e("MyActivity", throwable.getMessage(), throwable);

                      // Something went wrong when attempting to connect! Handle errors here
                  }
              });
  }

  @Override
  protected void onStop() {
      super.onStop();
      SpotifyAppRemote.disconnect(mSpotifyAppRemote);
  }

  private void connected() {
      // Play a playlist
      mSpotifyAppRemote.getPlayerApi().play("spotify:playlist:37i9dQZF1DX2sUQwD7tbmL");

      // Subscribe to PlayerState
      mSpotifyAppRemote.getPlayerApi()
              .subscribeToPlayerState()
              .setEventCallback(playerState -> {
                  final Track track = playerState.track;
                  if (track != null) {
                      Log.d("MainActivity", track.name + " by " + track.artist.name);
                  }
              });
  }*/
}
