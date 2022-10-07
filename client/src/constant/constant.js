import Axios from "axios"
export const proxyurl = "https://cors-anywhere.herokuapp.com/";
export const BASEURL = "https://spare-part.herokuapp.com"

export const _axios = Axios.create({withCredentials: true})