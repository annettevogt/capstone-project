import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

describe('Header.test.js', () => {
  it('renders a header tag with the text TasTEA', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)

    expect(div.querySelector('Header').textContent).toBe('TasTEA')
  })
})
