import React from 'react'
import StoryRouter from 'storybook-react-router'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { action } from '@storybook/addon-actions'
import testMock from './teasMock.json'
import InputForm from './InputForm'
import styled from 'styled-components'

export default {
  title: 'InputForm',
  component: InputForm,
}

storiesOf('InputForm', module)
  .addDecorator(
    StoryRouter({
      '/create': linkTo('LinkedStories', 'InputForm'),
    })
  )
  .add('InputForm', () => (
    <AppGrid>
      <InputForm tea={testMock[0]}>
        <button type="submit" onClick={action('clicked')}></button>
      </InputForm>
    </AppGrid>
  ))

const AppGrid = styled.div`
  height: 667px;
  width: 375px;
`
