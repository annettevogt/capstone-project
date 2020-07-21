import React from 'react'
import TeaList from '../components/TeaList'

export default function TeaListPage({ teasjson }) {
  return (
    <>
      <TeaList nochwurster={teasjson} />
    </>
  )
}
