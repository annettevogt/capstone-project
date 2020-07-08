import React from 'react'
import styled from 'styled-components'
import teas from './teas.json'

export default function TeaListItem() {
  return (
    <TeaListStyled>
      {teas.map((tea) => (
        <li key={tea.tea_name}>
          <H2Styled>{tea.tea_name}</H2Styled>
          <H3Styled>{tea.point_purchase}</H3Styled>
          <PStyled>{tea.description}</PStyled>
        </li>
      ))}
    </TeaListStyled>
  )
}

const TeaListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  list-style: none;
`

const H2Styled = styled.h2`
  width: 318px;
  height: 36px;
  object-fit: contain;
  font-family: PTSans, sans-serif;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  color: #2c3f58;
`

const H3Styled = styled.h3`
  width: 208px;
  height: 52px;
  font-family: DidactGothic;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: #2c3f58;
`

const PStyled = styled.p`
  width: 373px;
  height: 311px;
  opacity: 0.15;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #837e47;
`
