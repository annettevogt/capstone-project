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

export const NotFoundPage = () => <StyledDiv>404 - Page not found</StyledDiv>

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr auto 1fr;
  justify-content: center;
  align-items: end;
  height: 100%;
  width: 100%;
  font-family: 'PTSans Regular', sans-serif;
  font-size: 30px;
  color: var(--primary-dark);
  background-color: var(--secondary-light);
`
