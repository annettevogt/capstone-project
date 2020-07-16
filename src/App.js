import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import TeaList from './components/TeaList'
import teas from './components/teas.json'
import InputForm from './components/InputForm'
import Footer from './components/Footer'

export default function App() {
  const [teas, setTeas] = useState([])

  return (
    <AppGrid>
      <Header />
      <Main>
        <InputForm setTea={updateTeas} />
        <TeaList teas={teas} />
      </Main>
      {/* <Footer /> */}
    </AppGrid>
  )

  function updateTeas(newTea) {
    setTeas([...teas, newTea])
  }
}
const AppGrid = styled.div`
  display: grid;
  height: 100vh;
`
const Main = styled.main`
  overflow-y: scroll;
  line-height: 1.5;
`
