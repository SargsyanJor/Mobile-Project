import React, { useEffect, useState } from 'react'

import { ProductCart } from '../../components/ProductCart/ProductCart';
import { Box } from '@mui/material';


export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, []);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "50px", alignItems: "stretch", padding: "40px", }}>
      {
        products.map((products) => <ProductCart key={products.id} products={products} />)
      }
    </Box>
  )
}
