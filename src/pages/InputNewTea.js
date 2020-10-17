import React from 'react'
import styled from 'styled-components'
import InputForm from '../components/InputForm'
import { Link } from 'react-router-dom'
import { FiArrowLeftCircle } from 'react-icons/fi'

export default function InputNewTea({ setTea }) {
  return (
    <>
      <Link to="/tealistpage">
        <StyledButton>
          <FiArrowLeftCircle />
        </StyledButton>
      </Link>

      <InputForm setTea={setTea} />
    </>
  )
}

const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 39px;
  margin: 20px 0 0 22px;
  box-shadow: 0 -1px 1px 0 grey;
  position: relative;
  border-radius: 50%;
  border: solid 0 var(--light-green);
  background-color: var(--light-green);
  :active {
    color: var(--light-green);
    background-color: var(--dark-green);
  }
`
