import React from 'react'
import Home from './Home'
import StoryRouter from 'storybook-react-router'
import { linkTo } from '@storybook/addon-links'
import { addDecorator } from '@storybook/react'

export default {
  title: 'Home',
  component: Home,
}

addDecorator(StoryRouter({ '/': linkTo('InputNewTea') }))

export const HomeWithLogo = () => <Home />
