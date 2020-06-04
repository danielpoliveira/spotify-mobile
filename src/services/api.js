import axios from 'axios';

const TOKEN = 'BQA1E5J18qpNyWEm-B1bT1GNfvIyjX_dF3M9SsqcFJBm-7wlStvwM0J3kfuW1wXXK3DFcP-yHgsA7XDGpkthTJXEv6X0mLfWK0vwsz9uiAys37pcmW0j92_mL3ku0EIrE9imx0SfFJ2OM0n4UaeDeOqyNt0kZXNM7-qB';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  timeout: 10000,
  headers: { Authorization: `Bearer ${TOKEN}`}
});

export default api;