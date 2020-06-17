package com.spotifyrn;

import java.util.Map;
import java.util.HashMap;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.uimanager.IllegalViewOperationException;

import com.spotify.android.appremote.api.ConnectionParams;
import com.spotify.android.appremote.api.Connector;
import com.spotify.android.appremote.api.SpotifyAppRemote;

import com.spotify.protocol.client.Subscription;
import com.spotify.protocol.types.PlayerState;
import com.spotify.protocol.types.Track;


public class SpotifyModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String CLIENT_ID      = "456b40513ce2417ca0584f7fdc405610";
  private static final String REDIRECT_URI   = "https://example.com/callback";
  private static final String E_LAYOUT_ERROR = "E_LAYOUT_ERROR";
  
  private SpotifyAppRemote mSpotifyAppRemote;
  
  private boolean play    = false;
  private boolean connect = false;

  SpotifyModule(ReactApplicationContext context){
    super(context);
    reactContext = context;
  }

  public boolean getConnect(){
    return this.connect;
  }

  public void setConnect(boolean value){
    this.connect = value;
  }

  public boolean getPlay() {
    return this.play;
  }

  public void setPlay(boolean value) {
    this.play = value;
  }

  @Override
  public String getName() {
    return "SpotifySDK";
  }

  public void startConnection() {
    ConnectionParams connectionParams = new ConnectionParams
                                                    .Builder(CLIENT_ID)
                                                    .setRedirectUri(REDIRECT_URI)
                                                    .showAuthView(true)
                                                    .build();
    
    SpotifyAppRemote.connect(super.getReactApplicationContext(), connectionParams, 
      new Connector.ConnectionListener() {
            public void onConnected(SpotifyAppRemote spotifyAppRemote) {
                mSpotifyAppRemote = spotifyAppRemote;      
                setConnect(true);
            }

            public void onFailure(Throwable throwable) {
                setConnect(false);
                //Log.e("MyActivity", throwable.getMessage(), throwable);
            }
      });
  }

  @ReactMethod
  public void onStart(Promise promise){
    if(connect) return;

    ConnectionParams connectionParams = new ConnectionParams
                                                    .Builder(CLIENT_ID)
                                                    .setRedirectUri(REDIRECT_URI)
                                                    .showAuthView(true)
                                                    .build();
    
    SpotifyAppRemote.connect(super.getReactApplicationContext(), connectionParams, new Connector.ConnectionListener() {
            public void onConnected(SpotifyAppRemote spotifyAppRemote) {
                mSpotifyAppRemote = spotifyAppRemote;      
                setConnect(true);
                getTrack(promise);
            }

            public void onFailure(Throwable throwable) {
                setConnect(false);
                promise.reject(E_LAYOUT_ERROR, throwable.getMessage());      
            }
    });
  }

  @ReactMethod
  public void getTrack(Promise promise){
    try {
      WritableMap map = Arguments.createMap();
      
      if(mSpotifyAppRemote == null || !mSpotifyAppRemote.isConnected()){
        startConnection();
        promise.reject(E_LAYOUT_ERROR, "Error on getting music. Try again.");      
      }
      
      else
      mSpotifyAppRemote.getPlayerApi()
                       .subscribeToPlayerState()
                       .setEventCallback(playerState -> {
                        final Track track = playerState.track;

                        if(track != null) {
                          map.putBoolean("is_podcast", track.isPodcast);    
                          map.putBoolean("is_episode", track.isEpisode);    
                          map.putString("image_uri",   track.imageUri.raw.split("spotify:image:")[1]);
                          map.putString("artist_name", track.artist.name);
                          map.putString("artist_uri",  track.artist.uri);
                          map.putString("album_name",  track.album.name);
                          map.putString("album_uri",   track.album.uri);
                          map.putDouble("duration",    track.duration);
                          map.putString("track_name",  track.name);
                          map.putString("track_uri",   track.uri);

                          promise.resolve(map);
                        }
      });

    } catch (IllegalViewOperationException e) {
      promise.reject(E_LAYOUT_ERROR, e);
    }
  }

  @ReactMethod
  public void onStop() {
    if(getConnect()){
      setConnect(false);
      setPlay(false);

      mSpotifyAppRemote.getPlayerApi().pause();
      SpotifyAppRemote.disconnect(mSpotifyAppRemote);
    }
  }

  @ReactMethod
  public boolean onPlayPause(){
    if(getConnect()){
        if(getPlay())
            mSpotifyAppRemote.getPlayerApi().pause();
        else
            mSpotifyAppRemote.getPlayerApi().resume();
        
        setPlay(!getPlay());
    } else{
       startConnection();
    }

    return true;
  }

  @ReactMethod
  public void onNext() {
    if(!getConnect())
      startConnection();
    
    if(!getPlay()) setPlay(true);

    mSpotifyAppRemote.getPlayerApi().skipNext();
  }
  
  @ReactMethod
  public void onPrev(){
    if(!getConnect())
      startConnection();
    
    mSpotifyAppRemote.getPlayerApi().skipPrevious();
  }
    
}
