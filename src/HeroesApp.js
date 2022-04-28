import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
