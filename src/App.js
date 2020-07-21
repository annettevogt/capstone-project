import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import wurst from './components/teas.json'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import InputNewTea from './pages/InputNewTea'
import TeaListPage from './pages/TeaListPage'
// import Footer from './components/Footer'

export default function App() {
  const [teas, setTeas] = useState([])

  return (
    <AppGrid>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/inputnewtea" component={InputNewTea}>
            <Header />
            <InputNewTea setTea={updateTeas} />
          </Route>
          <Route path="/tealistpage" component={TeaListPage}>
            <Header />
            <TeaListPage teasjson={wurst} />
          </Route>
          <Route component={NotFound} />
          {/* <Footer /> */}
        </Switch>
      </Router>
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
