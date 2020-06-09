import React                       from 'react';
import WebView                     from 'react-native-webview'; 
import axios                       from 'axios';
import { Buffer }                  from 'buffer';

import { onSignIn }                from '../../services/auth';

import { client_id, secret_id }    from '../../config/auth.json';
import { scopes, url_login }       from '../../config/config.json';
import { 
  redirect_uri, 
  setParams, 
  useXURLEncoded 
}                                  from '../../config/headers';

let logged = false;

const Login = ({ navigation }) => {
  const checkURL = async url => {
    const queryParams = /code=([^&]+)/.exec(url);
    const code        = queryParams? queryParams[1] : undefined; 

    if(logged == false && code){
      logged = true;
      
      const params  = setParams(code);
      const access  = 'Basic ' + new Buffer(client_id +':'+ secret_id).toString('base64');

      await axios.post(`${url_login}/api/token`, params, { 
        headers: {
          'Authorization': access,
          'Content-Type' : useXURLEncoded,
         }
      }).then(async res => {
        const { access_token } = res.data
        try {
          access_token && 
            await onSignIn(access_token).then(() => navigation.navigate('Tabs'));
        } catch(err){
          console.log('erro ===> ', err);
        }

      }).catch( error => {
        console.log('aqui', error.response);
      }) 
    }
  }

  return (
    <WebView 
      onNavigationStateChange={e => checkURL(e.url)} 
      source={{ uri: `${url_login}/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_uri)}` }} 
    />
  )
}

export default Login;