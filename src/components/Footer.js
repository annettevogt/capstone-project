import React from 'react'
import styled from 'styled-components'
import AddButtonIcon from '../icons/AddButtonIcon.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <FooterStyled>
      <NavLink to="/inputnewtea">
        <HeadlineImg src={AddButtonIcon} alt="" />
      </NavLink>
    </FooterStyled>
  )
}

const FooterStyled = styled.section`
  display: flex;
  justify-content: center;
`

const HeadlineImg = styled.img``
