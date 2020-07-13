import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

beforeEach(() => {
  render(<Header></Header>)
})

describe('Header.test.js', () => {
  it('should render a header tag with the text TasTEA', () => {
    expect(screen.getByText('TasTEA')).toBeInTheDocument()
  })

  it('should consist a header with an img tag', () => {
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
