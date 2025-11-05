import * as React from 'react';
import { AppBar, Tooltip, Box, Toolbar, Typography, Container, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const pages = [{ title: "Home", path: '/' },
{ title: "Products", path: '/products' }];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            APP SHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', gap: '20px' }}>
            {pages.map((page) => (
              <Button
                component={NavLink}
                to={page.path}
                variant='contained'
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>


          <Box
            component={NavLink}
            to="/cart"
          >
            <IconButton >
              <ShoppingCartIcon />
            </IconButton>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}


// const [loading, setLoading] = React.useState(false);
//     React.useEffect(() => {
//         const timeout = setTimeout(() => {
//             setLoading(false);
//         }, 2000);
//         return () => clearTimeout(timeout);
//     });
//     return (

//     );