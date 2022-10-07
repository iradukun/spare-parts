import Axios from "axios"

export const BASEURL = "https://spare-part.herokuapp.com"

export const _axios = Axios.create({withCredentials: true})