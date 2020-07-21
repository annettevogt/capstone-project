import React from 'react'
import styled from 'styled-components'

export default function NotFound() {
  return <StyledDiv>Page not found</StyledDiv>
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr auto 1fr;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: end;
  font-family: 'PTSans Regular', sans-serif;
  font-size: 32px;
  color: black;
`
