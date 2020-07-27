import { addDecorator } from '@storybook/react'
import GlobalStyles from './src/components/GlobalStyles'
import React from 'react'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
