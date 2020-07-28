import React from 'react'
import InputForm from './InputForm'
import StoryRouter from 'storybook-react-router'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import testMock from './teasMock.json'

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
  .add('InputNewTea', () => <InputForm tea={testMock[0]} />)
