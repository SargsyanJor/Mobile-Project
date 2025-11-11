import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

export const ProductCart = ({ products,addToCard }) => {

    return (
        <Card
            sx={{
                maxWidth: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.03)" },
            }}
        >

            <Box
                component={NavLink }
                to={`/products/${products.id}`}
                sx={{ textDecoration: "none", color: "inherit" }}>
                <CardActionArea>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                        <CardMedia
                            component="img"
                            image={products.image}
                            alt={products.title}
                            sx={{ width: 150, height: 150, objectFit: "contain" }}
                        />
                    </Box>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" noWrap>
                            {products.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', height: 60, overflow: 'hidden' }}>
                            {products.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Box>
            <Button onClick={() => addToCard(products)}
                sx={{
                    width: "100%",
                    padding: "10px",
                }}
                variant='contained'
                startIcon={<ShoppingCartIcon />}
            >
                BUY
            </Button>
        </Card>
    );
}
