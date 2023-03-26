import React from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import SearchFilterContainer from '../../components/SearchFilterContainer/SearchFilterContainer'
import Header from '../Header/Header'

const Base =  () => {
  return (
    <ThemeProvider>
      <Header />
      <SearchFilterContainer />
    </ThemeProvider>
  )
}

export default Base