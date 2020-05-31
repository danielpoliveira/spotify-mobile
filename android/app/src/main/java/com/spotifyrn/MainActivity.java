package com.spotifyrn;

import com.facebook.react.ReactActivity;

import com.facebook.react.ReactActivityDelegate;                           // Biblioteca necessária para o react-navigation
import com.facebook.react.ReactRootView;                                   // Biblioteca necessária para o react-navigation
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // Biblioteca necessária para o react-navigation

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
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
}
