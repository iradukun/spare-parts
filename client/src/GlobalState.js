import React, {createContext, useState, useEffect} from 'react'
import ProductsAPI from './api/ProductsAPI'
import UserAPI from './api/UserAPI'
import CategoriesAPI from './api/CategoriesAPI'
import { BASEURL } from './constant/constant.js'
import { proxyurl } from './constant/constant.js'
import {_axios as axios} from './constant/constant.js'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    const baseurl= BASEURL
 
    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin');
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get(baseurl+'/user/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[baseurl])
    
    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserAPI(token),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}