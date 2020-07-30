import React from 'react'
import styled from 'styled-components'
import InputForm from './InputForm'
import StoryRouter from 'storybook-react-router'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import testMock from './teasMock.json'
import { action } from '@storybook/addon-actions'

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
  .add('InputNewTea', () => (
    <AppGrid>
      <InputForm tea={testMock[0]}>
        <StyledAddButton type="submit" onClick={action('clicked')}>
          Hello Button
        </StyledAddButton>
      </InputForm>
    </AppGrid>
  ))

const AppGrid = styled.div`
  height: 667px;
  width: 375px;
`
const StyledAddButton = styled.button`
  margin: 30px auto;
  justify-content: center;
  width: 126px;
  height: 40px;
  border-radius: 10px;
  background: var(--tertiary-dark);
  border: 2px solid var(--tertiary-medium-dark);
  color: var(--secondary-medium-light);
  font-family: 'Didact Gothic';
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.39px;
  :active {
    background-color: var(--secondary-light);
    color: var(--tertiary-dark);
  }
`
