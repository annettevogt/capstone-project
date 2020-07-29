import React from 'react'
import styled from 'styled-components'
import StoryRouter from 'storybook-react-router'
import { linkTo } from '@storybook/addon-links'
import { addDecorator } from '@storybook/react'
import NotFound from './NotFound'

export default {
  title: 'NotFound',
  component: NotFound,
}

addDecorator(StoryRouter({ '/NotFound': linkTo() }))

export const NotFoundPage = () => (
  <AppGrid>
    <NotFound />
  </AppGrid>
)

const AppGrid = styled.div`
  height: 667px;
  width: 375px;
`
