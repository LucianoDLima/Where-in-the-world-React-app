import React from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import SearchFilterContainer from '../../components/SearchFilterContainer/SearchFilterContainer'
import Header from '../Header/Header'
import Main from '../Main/Main'

const Base =  () => {
  return (
      <>
      <SearchFilterContainer />
      <Main />
      </>
  )
}

export default Base