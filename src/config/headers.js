export const redirect_uri    = "https://example.com/callback";

export const useXURLEncoded  = 'application/x-www-form-urlencoded';
export const useJson         = 'application/json';

export const setParams = access_code => {
  const _URLSearchParams = new URLSearchParams();

  _URLSearchParams.append('grant_type',  'authorization_code');
  _URLSearchParams.append('code',         access_code);
  _URLSearchParams.append('redirect_uri', redirect_uri);

  return _URLSearchParams;
}
