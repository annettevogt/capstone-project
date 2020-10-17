import React from 'react'
import styled from 'styled-components'
import TeaListItem from './TeaListItem'

export default function TeaList({ teas }) {
  return (
    <StyledTeaList>
      {teas.map((tea) => (
        <TeaListItem tea={tea} key={tea.id} />
      ))}
    </StyledTeaList>
  )
}

const StyledTeaList = styled.ul`
  list-style: none;
`
