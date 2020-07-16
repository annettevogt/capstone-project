import React from 'react'
import styled from 'styled-components'
import MapPinIcon from '../icons/MapPinIcon.svg'

export default function TeaListItem({
  tea: { name, pointPurchase, description },
}) {
  return (
    <StyledListItem data-testid="tea-list-entry">
      <StyledH2 data-testid="h2-test">{name}</StyledH2>
      <StyledImg data-testid="img-test" src={MapPinIcon} alt="" />
      <StyledH3>Hier gekauft: {pointPurchase}</StyledH3>
      <StyledP>{description}</StyledP>
      <StyledLine />
    </StyledListItem>
  )
}

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr auto auto;
  background-color: var(--secondary-light);
`

const StyledH2 = styled.h2`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  align-self: center;
  padding: 6px 5px;
  margin: 15px;
`

const StyledImg = styled.img`
  grid-column-start: 2;
  grid-row-start: 2;
  justify-self: center;
`

const StyledH3 = styled.h3`
  grid-column-start: 3;
  grid-column-end: 7;
  grid-row-start: 2;
  margin-bottom: 18px;
`

const StyledP = styled.p`
  grid-column-start: 2;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 3;
  align-self: center;
  padding: 12px;
  border-radius: 5px;
  background-color: var(--secondary-medium-light);
  font-size: 19px;
  color: var(--tertiary-medium-dark);
`
const StyledLine = styled.div`
  grid-column-start: 1;
  grid-column-end: 8;
  border-bottom: solid 1px var(--primary-light);
  padding: 15px 0px;
`
