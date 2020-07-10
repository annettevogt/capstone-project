import React from 'react'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
import styled from 'styled-components'
import TeaList from './TeaList'
import MapPinIcon from '../icons/MapPinIcon.svg'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  title: 'TeaList',
  component: TeaList,
}

export const withExampleData = () => (
  <Li key={'1'}>
    <H2>{'Vietnamese Oolong'}</H2>
    <Img src={MapPinIcon} alt="" />
    <H3>Hier gekauft: {'Connewitzer Teeladen, Leipzig'}</H3>
    <P>
      {
        'Duftiges Aroma von Orchidee. Subtiles, lang anhaltendes Bukett von Veilchen. Tee mit edlem Charakter.'
      }
    </P>
    <Line />
  </Li>
)

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
  padding: 6px 5px;
  margin: 15px;
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
  align-self: center;
  padding: 12px;
  border-radius: 5px;
  background-color: var(--secondary-medium-light);
  font-size: 19px;
  font-weight: normal;
  color: var(--tertiary-dark);
`
const Line = styled.div`
  grid-column-start: 1;
  grid-column-end: 8;
  border-bottom: solid 1px var(--primary-light);
  padding: 10px 0px;
`
