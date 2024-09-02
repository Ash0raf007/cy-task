import { axiosServerInstance } from "../../../../lib/axios/axios"


export async function loginClient(user) {


  return await axiosServerInstance.post(`/login/`, user)
}



export async function getProfile(token) {


  return await axiosServerInstance.get(`/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
