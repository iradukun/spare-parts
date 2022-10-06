import Axios from "axios"

export const BASEURL = "http://localhost:5000"

export const _axios = Axios.create({withCredentials: true})