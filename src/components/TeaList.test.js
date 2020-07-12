import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import TeaList from './TeaList'
import testMock from './teasMock.json'

beforeEach(() => {
  render(<TeaList teas={testMock} />)
})

describe('TeaList.test.js', () => {
  it('should render expected length of list items', () => {
    expect(screen.getAllByTestId('tea-list-entry').length).toBe(testMock.length)
  })
})
