import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
    }, [id]);


    return (
        <li>{product?.title}</li>
    )
}
