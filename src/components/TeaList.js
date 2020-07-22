import React from 'react'
import styled from 'styled-components'
import TeaListItem from './TeaListItem.js'

export default function TeaList({ teas }) {
  return (
    <main>
      <TeaListStyled>
        {teas.map((tea) => (
          <TeaListItem tea={tea} key={tea.id} />
        ))}
      </TeaListStyled>
    </main>
  )
}

const TeaListStyled = styled.ul`
  list-style: none;
`
