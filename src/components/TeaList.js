import React from 'react'
import styled from 'styled-components'
import TeaListItem from './TeaListItem.js'
import { NavLink } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'

export default function TeaList({ teas }) {
  return (
    <>
      <main>
        <StyledTeaList>
          {teas.map((tea) => (
            <TeaListItem tea={tea} key={tea.id} />
          ))}
        </StyledTeaList>
      </main>

      <StyledLink to="/inputnewtea">
        <StyledButton>
          <FiPlusCircle alt="" />
        </StyledButton>
      </StyledLink>
    </>
  )
}

const StyledTeaList = styled.ul`
  list-style: none;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 50px;
  box-shadow: 0 -1px 5px 0 grey;
  background-color: var(--secondary-medium-light);
`

const StyledButton = styled.button`
  position: relative;
  height: 50px;
  width: 50px;
  bottom: 13px;
  border-radius: 50%;
  border: solid 2px var(--secondary-medium-light);
  box-shadow: 0 -1px 2px 0 grey;
  font-size: 45px;
  background-color: var(--secondary-medium-light);
  :active {
    color: var(--secondary-medium-light);
    background-color: var(--secondary-dark);
  }
`
