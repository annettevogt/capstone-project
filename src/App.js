import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import teaList from './components/teas.json'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import InputNewTea from './pages/InputNewTea'
import TeaListPage from './pages/TeaListPage'

export default function App() {
  const [teas, setTeas] = useState([])

  useEffect(() => {
    setTeas(teaList)
  }, [])

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
          <TeaListPage teasState={teaList} />
        </Route>
        <Route component={NotFound} />
      </Switch>
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
