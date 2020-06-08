import axios from 'axios';

const TOKEN = "BQB1B0EJ7-rclJqkCZj54S-r_2Ih_Egq21dO7iLnw_MXsqc4P7v8z1oSAXN5ia85Lkq2mDtev5bHx_M0nW6rWFhaAW-ot5VMk_0OFV3NqX-TqbRLhdJsNwPooM3Qx2RNfiM0_1ATnCKs3m_moMON7ClyZdZ3AxkG8EaQEI-6bH8fWPuosMOmuOmCISYmxPtku65Eq14tFiu3DfNuLWwUcHoVU9UNVVfqU5aD8hCKtoMKE8nbQtyM7akdoISTOAI0aeOp9iFhPaxerbTqBySFFOkbg9yCMcjy";

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  timeout: 10000,
  headers: { Authorization: `Bearer ${TOKEN}`}
});

export default api;