import React from 'react'
import styled from 'styled-components'
import TeaList from './TeaList'
import TeaListItem from './TeaListItem'

export default {
  title: 'TeaList',
  component: TeaList,
}

export const withExampleData = () => (
  <AppGrid>
    <TeaListStyled>
      <TeaListItem
        tea={{
          id: 1,
          name: 'Vietnamese Oolong',
          pointPurchase: 'Connewitzer Teeladen, Leipzig',
          description:
            'Duftiges Aroma von Orchidee. Subtiles, lang anhaltendes Bukett von Veilchen. Tee mit edlem Charakter.',
        }}
      />
      <TeaListItem
        tea={{
          id: 2,
          name: 'Milky Oolong',
          pointPurchase: 'Biomare, Leipzig-Connewitz',
          description:
            'Fruchtig-sahniges Bukett. Aromen von Aprikose und süßer Milch. ',
        }}
      />
      <TeaListItem
        tea={{
          id: 3,
          name: 'Chun Mee',
          pointPurchase: 'Bioladen Macis, Leipzig',
          description:
            'Sanfte Aromen nach Gras und Wiesenblumen. Erinnert an eine laue Sommernacht unter freiem Himmel. Idealer Begleiter zu weißer Schokolade.',
        }}
      />
    </TeaListStyled>
  </AppGrid>
)

const AppGrid = styled.div`
  height: 667px;
  width: 375px;
`

const TeaListStyled = styled.ul`
  list-style: none;
`
