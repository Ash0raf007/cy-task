import  axios from "axios"

export const axiosServerInstance = axios.create({
  baseURL:"https://cyparta-backend-gf7qm.ondigitalocean.app/api",
  timeout: 50000
});