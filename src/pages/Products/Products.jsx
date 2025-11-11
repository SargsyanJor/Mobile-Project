
import { ProductCart } from '../../components/ProductCart/ProductCart';
import { Box } from '@mui/material';


export const Products = ({products,addToCard}) => {

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "50px", alignItems: "stretch", padding: "40px", }}>
      {
        products.map((products) => <ProductCart key={products.id} products={products} addToCard={addToCard} />)
      }
    </Box>
  )
}
