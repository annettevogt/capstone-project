import React from 'react'
import styled from 'styled-components'
import TeaListItem from './TeaListItem.js'
import AddButtonIcon from '../icons/AddButtonIcon.svg'
import { NavLink } from 'react-router-dom'

export default function TeaList({ teas }) {
  return (
    <>
      <main>
        <TeaListStyled>
          {teas.map((tea) => (
            <TeaListItem tea={tea} key={tea.id} />
          ))}
        </TeaListStyled>
      </main>
      <StyledFooter>
        <NavLink to="/inputnewtea">
          <img src={AddButtonIcon} alt="" />
        </NavLink>
      </StyledFooter>
    </>
  )
}

const TeaListStyled = styled.ul`
  list-style: none;
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-top: 5px;
  background-color: var(--secondary-light);
`
