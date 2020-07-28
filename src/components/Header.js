import React from 'react'
import styled from 'styled-components'
import TeaHeaderIcon from '../icons/TeaHeaderIcon.svg'

export default function Header() {
  return (
    <HeaderStyled>
      <HeadlineText>TasTEA</HeadlineText>
      <HeadlineImg src={TeaHeaderIcon} alt="" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  grid-gap: 5px;
  align-items: center;
  opacity: 0.97;
  border: 1px solid var(--primary-light);
  background-color: var(--secondary-dark);
  font-family: 'PTSans Regular', sans-serif;
  font-size: 32px;
  color: var(--secondary-medium-light);
  line-height: 2;
`

const HeadlineImg = styled.img`
  margin-bottom: 10px;
`
const HeadlineText = styled.div`
  grid-column-start: 2;
`
