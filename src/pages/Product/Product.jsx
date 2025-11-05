import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { instance } from '../../App/App'

export const Product = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null);

    useEffect(() => {
        instance.get(`/products/${id}`)
            .then((res) => setProduct(res.data))
    }, [id]);


    return (
        <li>{product?.title}</li>
    )
}
