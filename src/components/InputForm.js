import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FiArrowLeftCircle } from 'react-icons/fi'

const projectSchema = yup.object().shape({
  name: yup.string().min(5).max(30).required(),
  pointPurchase: yup.string().min(10).max(30).required(),
  description: yup.string().min(10).max(300).required(),
})

export default function InputForm({ setTea }) {
  const [newTea, setNewTea] = useState({
    name: '',
    pointPurchase: '',
    description: '',
    resolver: yupResolver(projectSchema),
  })

  return (
    <main>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLink to="/tealistpage">
          <StyledButton>
            <FiArrowLeftCircle />
          </StyledButton>
        </StyledLink>

        <StyledH2>Füge einen neuen Lieblingstee hinzu.</StyledH2>
        <StyledLabel htmlFor="name">
          Name des Tees:
          <StyledInput
            id="name"
            name="name"
            onChange={handleChange}
            value={newTea.name}
            type="text"
            placeholder="Z.B. Milky Oolong"
            autoFocus
            data-testid="tea-name"
          />
          {newTea.name.length < 5 && (
            <StyledError>Your name requires at least 5 characters.</StyledError>
          )}
          {newTea.name.length > 30 && (
            <StyledError> Your name allows maximum 30 characters.</StyledError>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="pointPurchase">
          Hier gekauft:
          <StyledInput
            id="pointPurchase"
            name="pointPurchase"
            onChange={handleChange}
            value={newTea.pointPurchase}
            type="text"
            placeholder="Z.B. Bioladen Macis, Leipzig"
            data-testid="point-purchase"
          />
          {newTea.pointPurchase.length < 10 && (
            <StyledError>
              Your point of purchase requires at least 10 characters.
            </StyledError>
          )}
          {newTea.pointPurchase.length >= 30 && (
            <StyledError>
              Your point of purchase allows maximum 30 characters.
            </StyledError>
          )}
        </StyledLabel>
        <StyledLabel htmlFor="description">
          Beschreibe Deinen Lieblingstee:
          <StyledTextarea
            name="description"
            id="description"
            onChange={handleChange}
            value={newTea.description}
            type="text"
            placeholder="Z.B. fruchtig-sahniges Bukett. Aromen von Aprikose und süßer Milch."
            data-testid="tea-description"
          />
          {newTea.description.length < 10 && (
            <StyledError>
              Your description of purchase requires at least 10 characters.
            </StyledError>
          )}
          {newTea.description.length > 300 && (
            <StyledError>
              Your description allows maximum 300 characters.
            </StyledError>
          )}
        </StyledLabel>
        <StyledAddButton type="submit">Add</StyledAddButton>
        <StyledLine></StyledLine>
      </StyledForm>
    </main>
  )

  function handleSubmit(event) {
    event.preventDefault()
    try {
      projectSchema.validateSync({
        name: newTea.name,
        pointPurchase: newTea.pointPurchase,
        description: newTea.description,
      })
      setTea(newTea)
      setNewTea({
        name: '',
        pointPurchase: '',
        description: '',
      })
    } catch (error) {}
  }

  function handleChange(event) {
    setNewTea({
      ...newTea,
      [event.target.name]: event.target.value,
    })
  }
}

const StyledLink = styled(NavLink)`
  align-self: flex-start;
`

const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  font-size: 39px;
  margin: 20px 0 0 22px;
  box-shadow: 0 -1px 1px 0 grey;
  position: relative;
  border-radius: 50%;
  border: solid 0 var(--secondary-medium-light);
  background-color: var(--secondary-medium-light);
  :active {
    color: var(--secondary-medium-light);
    background-color: var(--secondary-dark);
  }
`

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  background-color: var(--secondary-light);
`

const StyledH2 = styled.h2`
  margin: 1px 15px 15px 20px;
  padding: 20px 5px 5px;
`

const StyledLabel = styled.label`
  width: 90%;
  font-family: 'Didact Gothic', sans-serif;
  color: var(--primary-dark);
  font-size: 20px;
  padding: 15px 20px;
`

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--tertiary-medium-dark);
  background-color: var(--secondary-medium-light);
  padding: 10px 15px;
  margin: 3px -3px;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 19px;
  opacity: 0.9;
  ::-webkit-input-placeholder {
    color: var(--tertiary-medium-dark);
  }
  :focus {
    outline: hidden 1px var(--secondary-dark);
    box-shadow: 0 0 0 1pt var(--secondary-dark);
  }
  ::-internal-autofill-selected {
    background-color: var(--secondary-medium-light) !important;
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-radius: 5px;
  color: var(--tertiary-medium-dark);
  background-color: var(--secondary-medium-light);
  font-family: 'Didact Gothic', sans-serif;
  font-size: 19px;
  border: 2px solid var(--tertiary-medium-dark);
  padding: 10px 15px;
  margin: 3px -3px;
  ::-webkit-input-placeholder {
    color: var(--tertiary-medium-dark);
  }
  :focus {
    outline: hidden 1px var(--secondary-dark);
    box-shadow: 0 0 0 1pt var(--secondary-dark);
  }
`
const StyledLine = styled.div`
  display: block;
  border-bottom: solid 1px var(--primary-light);
  padding: 20px 0;
  width: 100%;
`

const StyledAddButton = styled.button`
  margin: 30px auto;
  justify-content: center;
  width: 126px;
  height: 40px;
  border-radius: 10px;
  background: var(--tertiary-dark);
  border: 2px solid var(--tertiary-medium-dark);
  color: var(--secondary-medium-light);
  font-family: 'Didact Gothic';
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.39px;
  :active {
    background-color: var(--secondary-light);
    color: var(--tertiary-dark);
  }
`

const StyledError = styled.p`
  font-family: 'Didact Gothic', sans-serif;
  color: var(--tertiary-medium-dark);
  font-size: 16px;
  margin: 1px 10px;
`
