# Spotify Mobile RN

A simple clone of the Spotify Music App created in react native

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js and React Native basic usage dependencies.
Spotify Music App installed on your the device. [Download link for android](https://play.google.com/store/apps/details?id=com.spotify.music).

### Installing

```
yarn install (`npm install` if you use npm)
```

After paste this

```
yarn android (`npm run android` if you use npm) or react-native run-android
```

And finally
```
yarn start (`npm run start` if you use npm) or react-native start
```

### Run this application

You must log in with your Spotify account on the app and accept the development features.

And enjoy: D

## Register as your application

This application is currently registered on the Spotify website to be able to run and communicate with the server. If you want to improve the application and eventually make it available in your authorship, I recommend that you register the application use with your Spotify account for Developers [Link here to more information](https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app).

After all the process done by the article above, you will probably have a new client_id and secret_client, now you need to generate a fingerprint key and register it on the websit. [Link here to more information](https://developer.spotify.com/documentation/android/quick-start/#prepare-your-environment)

Now, you need to change the client_id and client_secret in the [auth.json](https://github.com/danielpoliveira/spotify-mobile/blob/master/src/config/auth.json) and [SpotifyModule.java](https://github.com/danielpoliveira/spotify-mobile/blob/master/android/app/src/main/java/com/spotifyrn/SpotifyModule.java) files. I recommend that after that, perform the [installation](#installing) step again.


## Built With

* [React Native](https://reactnative.dev/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [React Native WebView](https://github.com/react-native-community/react-native-webview)
* [Redux](https://redux.js.org/) - I love redux :heart:


## Contributing

Every pull request will be very welcome

## Authors

* **Daniel Oliveira** - [danielpoliveira](https://github.com/danielpoliveira)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
