import React from 'react'
import Header from './Header'
import GlobalStyles from './GlobalStyles'

export default {
  title: 'Header',
  component: Header,
  // decorators: [(storyFn) => <Header>{storyFn()}</Header>],
}

export const ToStorybook = () => (
  <>
    <GlobalStyles />
    <Header />
  </>
)
