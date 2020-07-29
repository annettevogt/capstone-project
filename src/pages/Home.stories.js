import React from 'react'
import Home from './Home'
import StoryRouter from 'storybook-react-router'
import { linkTo } from '@storybook/addon-links'
import { addDecorator } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Home',
  component: Home,
}

addDecorator(StoryRouter({ '/': linkTo('InputNewTea') }))

export const HomeWithLogo = () => (
  <AppGrid>
    <Home />
  </AppGrid>
)

const AppGrid = styled.div`
  height: 667px;
  width: 375px;
`
