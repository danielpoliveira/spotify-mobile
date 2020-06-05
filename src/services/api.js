import axios from 'axios';

const TOKEN = 'BQCpPzJMDc52RwPyHigE5RLg5xlfLugzt2wbImxmMYK6uI32dWZFYFQSgU5u8VP-B_lR3CEKf1GakQ2lF-8zf12ZeJ1OIC73Tr7KDG9hEoedkxeqSguVjBTigy6u424G_sR9vQwGrjzVpnkqMzbZ_yHan34yXHjofjM_KxsnRYtySZv1_0fn1FynrTiMmh6IIatjihoR6FhCHsPTb3gAMZVdCm7bSk0gyxL47AEPZNPxwGxtvhP1F7PoIqXFGbgEXZdCURRmUGSZayyqhVWeDot1oTg1HVt_';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  timeout: 10000,
  headers: { Authorization: `Bearer ${TOKEN}`}
});

export default api;