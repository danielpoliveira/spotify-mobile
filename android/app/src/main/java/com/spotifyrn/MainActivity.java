package com.spotifyrn;

import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;                           // Necessário para o react-navigation
import com.facebook.react.ReactRootView;                                   // Necessário para o react-navigation
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // Necessário para o react-navigation

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "spotifyRN";
  }

  @Override                                                                 // Necessário para o react-navigation
  protected ReactActivityDelegate createReactActivityDelegate() {           // Necessário para o react-navigation
    return new ReactActivityDelegate(this, getMainComponentName()) {        // Necessário para o react-navigation
      @Override                                                             // Necessário para o react-navigation
      protected ReactRootView createRootView() {                            // Necessário para o react-navigation
       return new RNGestureHandlerEnabledRootView(MainActivity.this);       // Necessário para o react-navigation
      }
    };
  }
  
}
