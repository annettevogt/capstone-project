import React from 'react'
import styled from 'styled-components'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
}

export const withLogo = () => (
  <AppGrid>
    <Header />
  </AppGrid>
)

const AppGrid = styled.div`
  height: 667px;
  width: 375px;
`
