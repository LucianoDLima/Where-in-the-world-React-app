import React from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import Header from '../Header/Header'

const Base =  () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default Base