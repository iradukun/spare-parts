import {useState, useEffect} from 'react'
import axios from 'axios'


function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)
    const basurl='https://spare-part.herokuapp.com'

    useEffect(() =>{
        const getCategories = async () =>{
            const res = await axios.get(basurl+'/api/category')
            setCategories(res.data)
        }

        getCategories()
    },[callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}


export default CategoriesAPI
