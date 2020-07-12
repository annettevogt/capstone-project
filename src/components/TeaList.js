import React from 'react'
import styled from 'styled-components'
import TeaListItem from './TeaListItem.js'

export default function TeaList({ teas }) {
  return (
    <TeaListStyled>
      {teas.map((tea) => (
        <TeaListItem tea={tea} key={tea.id} />
      ))}
    </TeaListStyled>
  )
}

const TeaListStyled = styled.ul`
  list-style: none;
`
