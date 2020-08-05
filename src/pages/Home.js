import React from 'react'
import styled from 'styled-components'
import TeaHeaderIcon from '../icons/TeaHeaderIcon.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link to="/tealistpage">
      <HeaderStyled>
        <HeadlineText>TasTEA</HeadlineText>
        <HeadlineImg src={TeaHeaderIcon} alt="" />
      </HeaderStyled>
    </Link>
  )
}

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  grid-template-rows: 1fr 1fr auto 1fr;
  height: 100%;
  width: 100%;
  grid-gap: 15px;
  align-items: end;
  opacity: 0.97;
  border: 1px solid var(--medium-grey);
  background-color: var(--dark-green);
  font-family: 'PTSans Regular', sans-serif;
  font-size: 32px;
  color: var(--light-green);
  line-height: 2;
  z-index: 100;
`

const HeadlineImg = styled.img`
  position: relative;
  margin-bottom: 13px;
  grid-column-start: 3;
`
const HeadlineText = styled.div`
  grid-column-start: 2;
`
