import React from 'react'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import TeaListItem from './TeaListItem'

export default {
  title: 'TeaListItem',
  component: TeaListItem,
  decorators: [withKnobs],
}

const withExampleData = {
  name: 'Vietnamese Oolong',
  pointPurchase: 'Connewitzer Teeladen, Leipzig',
  description:
    'Duftiges Aroma von Orchidee. Subtiles, lang anhaltendes Bukett von Veilchen. Tee mit edlem Charakter.',
}

export const itemWithExampleData = () => (
  <TeaListItem tea={object('with example data', withExampleData)} />
)
