import React from 'react'
import Header from './components/Header'
import TeaList from './components/TeaList'
import teas from './components/teas.json'

function App() {
  return (
    <div>
      <Header />
      <TeaList teas={teas} />
    </div>
  )
}

export default App
