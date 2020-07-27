import React from 'react'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
import styled from 'styled-components'
import TeaListItem from './TeaListItem'
import MapPinIcon from '../icons/MapPinIcon.svg'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  title: 'TeaListItem',
  component: TeaListItem,
}

export const withExampleData = () => (
  <StyledListItem key={'1'}>
    <StyledH2>{'Vietnamese Oolong'}</StyledH2>
    <StyledImg src={MapPinIcon} alt="" />
    <StyledH3>Hier gekauft: {'Connewitzer Teeladen, Leipzig'}</StyledH3>
    <StyledP>
      {
        'Duftiges Aroma von Orchidee. Subtiles, lang anhaltendes Bukett von Veilchen. Tee mit edlem Charakter.'
      }
    </StyledP>
    <StyledLine />
  </StyledListItem>
)

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  background-color: var(--secondary-light);
`

const StyledH2 = styled.h2`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  align-self: center;
  padding: 6px 5px;
  margin: 15px;
  color: var(--primary-dark);
  font-size: 26px;
  line-height: 1.64;
  font-stretch: normal;
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
  font-family: DidactGothic, sans-serif;
  color: var(--primary-dark);
  font-size: 22px;
  line-height: 1.44;
  font-weight: 500;
`

const StyledP = styled.p`
  grid-column-start: 2;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 5;
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
  padding: 10px 0px;
`
