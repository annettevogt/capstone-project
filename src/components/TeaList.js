import React from 'react'
import styled from 'styled-components'
import teas from './teas.json'
import MapPinIcon from '../icons/MapPinIcon.svg'

export default function TeaList() {
  return (
    <TeaListStyled>
      {teas.map((tea) => (
        <Li key={tea.id}>
          <H2>{tea.tea_name}</H2>
          <Img src={MapPinIcon} alt="" />
          <H3>{tea.point_purchase}</H3>
          <P>{tea.description}</P>
          <Line />
        </Li>
      ))}
    </TeaListStyled>
  )
}

const TeaListStyled = styled.ul`
  list-style: none;
`
const Li = styled.li`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  background-color: var(--secondary-light);
`

const H2 = styled.h2`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  align-self: center;
  padding: 6px;
  margin: 5px 15px;
  color: var(--primary-dark);
  font-size: 26px;
  font-weight: normal;
  line-height: 1.64;
  font-stretch: normal;
`

const Img = styled.img`
  grid-column-start: 2;
  grid-row-start: 2;
  justify-self: center;
`

const H3 = styled.h3`
  grid-column-start: 3;
  grid-column-end: 7;
  grid-row-start: 2;
  margin-bottom: 10px;
  font-family: DidactGothic, sans-serif;
  color: var(--primary-dark);
  font-size: 22px;
  font-weight: normal;
  line-height: 1.44;
`

const P = styled.p`
  grid-column-start: 2;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 5;
  text-align: justify-all;
  align-self: center;
  padding: 12px;
  border-radius: 5px;
  background-color: var(--secondary-medium-light);
  /* font-family: DidactGothic, sans-serif; */
  font-size: 19px;
  font-weight: normal;
  color: var(--tertiary-dark);
`
const Line = styled.div`
  grid-column-start: 1;
  grid-column-end: 8;
  border-bottom: solid 1px var(--primary-light);
  padding: 20px 0px;
`
