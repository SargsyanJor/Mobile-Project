import React from 'react'

import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export const Layout = ({ cartLenght }) => {
  return (
    <div>
      <Header cartLenght={cartLenght} />
      <Container maxWidth='xl' >

        <Outlet />

      </Container>
    </div>
  )
}
