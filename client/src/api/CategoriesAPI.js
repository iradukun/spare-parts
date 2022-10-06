import {useState, useEffect} from 'react'
import {_axios as axios} from '../constant/constant.js'
import { BASEURL } from './../constant/constant.js'

function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)
    const baseurl= BASEURL

    useEffect(() =>{
        const getCategories = async () =>{
            const res = await axios.get(baseurl+'/api/category')
            setCategories(res.data)
        }

        getCategories()
    },[callback, baseurl])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}


export default CategoriesAPI
