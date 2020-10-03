import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import InputNewTea from './pages/InputNewTea'
import TeaListPage from './pages/TeaListPage'
import { v4 as uuid } from 'uuid'

export default function App() {
  const [teas, setTeas] = useState([])

  useEffect(() => {
    setTeas(JSON.parse(localStorage.getItem('myTeaList') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('myTeaList', JSON.stringify(teas))
  }, [teas])

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/inputnewteapage">
          <Header />
          <InputNewTea setTea={updateTeas} />
        </Route>
        <Route path="/tealistpage">
          <Header />
          <TeaListPage teasState={teas} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AppGrid>
  )

  function updateTeas(newTea) {
    newTea.id = uuid()
    setTeas([...teas, newTea])
  }
}
const AppGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 66px auto;
`
