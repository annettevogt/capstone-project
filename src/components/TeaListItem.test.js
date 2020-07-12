import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import TeaListItem from './TeaListItem'
import testMock from './teasMock.json'

beforeEach(() => {
  render(<TeaListItem tea={testMock[0]} />)
})

describe('TeaListItem.test.js', () => {
  it('should render a heading h2', () => {
    const h2 = screen.getByTestId('h2-test')
    expect(h2.tagName).toBe('H2')
  })

  it('should render an image tag', () => {
    const img = screen.getByTestId('img-test')
    expect(img.tagName).toBe('IMG')
  })
})
