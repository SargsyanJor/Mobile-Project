import React from 'react'

import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export const Layout = () => {
  return (
    <div>
      <Header />
      <Container maxWidth='xl' >

        <Outlet />

      </Container>
    </div>
  )
}
