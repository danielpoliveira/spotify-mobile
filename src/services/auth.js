import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = "@SpotifyAPI:token";

export const onSignIn = async TOKEN => {
  await AsyncStorage.multiSet([
    ["@SpotifyAPI:token", TOKEN],
  ]);
}

export const isLogged = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return token;
}