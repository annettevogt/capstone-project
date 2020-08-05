import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import { render, screen, fireEvent } from '@testing-library/react'
import { Router } from 'react-router'
import InputForm from './InputForm'

describe('InputForm.test.js', () => {
  it('should display the entered value of the name input field after change event', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <InputForm />
      </Router>
    )

    const nameName = screen.getByTestId('tea-name')
    fireEvent.change(nameName, { target: { value: 'tea name' } })
    expect(nameName.value).toBe('tea name')
  })

  it('should display the entered value of the description field after change event', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <InputForm />
      </Router>
    )
    const nameDescription = screen.getByTestId('tea-description')
    fireEvent.change(nameDescription, { target: { value: 'tea description' } })
    expect(nameDescription.value).toBe('tea description')
  })

  it('submits the values when name input meets required length', () => {
    const history = createMemoryHistory()
    const setTea = jest.fn()
    const { getByText } = render(
      <Router history={history}>
        <InputForm setTea={setTea} />
      </Router>
    )
    const nameName = screen.getByTestId('tea-name')
    fireEvent.change(nameName, { target: { value: 'tea name' } })

    const namePointPurchase = screen.getByTestId('point-purchase')
    fireEvent.change(namePointPurchase, {
      target: { value: 'Teeladen Leipzig' },
    })

    const nameDescription = screen.getByTestId('tea-description')
    fireEvent.change(nameDescription, { target: { value: 'Wundervoller Tee' } })
    fireEvent.click(getByText('Add'))
    expect(setTea).toHaveBeenCalled()
  })

  it('does not call submit when the name input is less than 5 characters', () => {
    const history = createMemoryHistory()
    const setTea = jest.fn()
    const { getByText } = render(
      <Router history={history}>
        <InputForm setTea={setTea} />
      </Router>
    )
    const nameName = screen.getByTestId('tea-name')
    fireEvent.change(nameName, { target: { value: 'a' } })

    const namePointPurchase = screen.getByTestId('point-purchase')
    fireEvent.change(namePointPurchase, {
      target: { value: 'Teeladen Leipzig' },
    })

    const nameDescription = screen.getByTestId('tea-description')
    fireEvent.change(nameDescription, { target: { value: 'Wundervoller Tee' } })

    fireEvent.click(getByText('Add'))
    expect(setTea).not.toHaveBeenCalled()
  })
})
