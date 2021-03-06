import React from 'react'
import styled from 'styled-components'
import TeaList from '../components/TeaList'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'

export default function TeaListPage({ teasState }) {
  return (
    <Grid>
      <TeaList teas={teasState} />
      <StyledLink to="/inputnewteapage">
        <StyledAddButton data-cy="submit">
          <FiPlusCircle alt="" />
        </StyledAddButton>
      </StyledLink>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 66px auto 50px;
  position: relative;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 50px;
  box-shadow: 0 -1px 5px 0 grey;
  background-color: var(--light-green);
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
`

const StyledAddButton = styled.button`
  position: relative;
  border-radius: 50%;
  border: solid 2px var(--light-green);
  background-color: var(--light-green);
  height: 50px;
  width: 50px;
  bottom: 13px;
  box-shadow: 0 -1px 2px 0 grey;
  font-size: 45px;
  :active {
    color: var(--light-green);
    background-color: var(--dark-green);
  }
`
