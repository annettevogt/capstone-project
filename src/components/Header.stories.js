import React from 'react'
import Header from './Header'
import { addDecorator } from '@storybook/react'
import GlobalStyles from './GlobalStyles'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  title: 'Header',
  component: Header,
}

export const withLogo = () => <Header />
