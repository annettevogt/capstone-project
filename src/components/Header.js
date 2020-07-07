import React from 'react'
import styled from 'styled-components'
import teaHeaderIcon from '../icons/teaHeaderIcon.svg'

export default function Header() {
  return (
    <HeaderStyled>
      <DivStyled>TasTEA</DivStyled>
      <ImgStyled src={teaHeaderIcon} alt="" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  width: 373px;
  height: 95px;
  opacity: 0.97;
  border-radius: 4px;
  border: solid 1px #979797;
  background-color: #837e47;
  font-family: PTSans-Regular, sans-serif;
  font-size: 32px;
  color: #dcdbce;
  font-weight: normal;
  line-height: 2;
  position: fixed;
  z-index: 1;
`

const ImgStyled = styled.img`
  position: absolute;
  top: 18px;
  right: 110px;
`
const DivStyled = styled.div`
  position: fixed;
  top: 15px;
  left: 100px;
`
