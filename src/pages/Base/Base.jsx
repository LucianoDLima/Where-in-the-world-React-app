import React from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import SearchFilterContainer from '../../components/SearchFilterContainer/SearchFilterContainer'
import Header from '../Header/Header'
import Main from '../Main/Main'

const Base =  () => {
  return (
    <ThemeProvider>
      <Header />
      <SearchFilterContainer />
      <Main />
    </ThemeProvider>
  )
}

export default Base