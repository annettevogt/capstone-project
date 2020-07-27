import React from 'react'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
import styled from 'styled-components'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  title: 'InputForm',
  component: InputForm,
}

export const  = () => (