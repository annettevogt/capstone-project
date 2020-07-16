import React from 'react'
import Header from './components/Header'
import TeaList from './components/TeaList'
import teas from './components/teas.json'
import styled from 'styled-components'
import InputForm from './components/InputForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <AppGrid>
      <Header />
      <Main>
        <InputForm />
        <TeaList teas={teas} />
      </Main>
      {/* <Footer /> */}
    </AppGrid>
  )
}
const AppGrid = styled.div`
  display: grid;
  height: 100vh;
`
const Main = styled.main`
  overflow-y: scroll;
  line-height: 1.5;
`
