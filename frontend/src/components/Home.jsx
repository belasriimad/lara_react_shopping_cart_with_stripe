import React, { useEffect, useState } from 'react'
import ProductList from "./products/ProductList"
import axios from "axios"


export default function Home() {
    const [products,setProducts] = useState([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products')
                setProducts(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllProducts()
    }, [])
    

    return (
        <ProductList  products={products} />
    )
}
