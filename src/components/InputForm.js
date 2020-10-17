import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

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
    id: uuid(),
    resolver: yupResolver(projectSchema),
  })

  return (
    <main>
      <StyledForm onSubmit={handleSubmit}>
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
            className="name"
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
            className="pointPurchase"
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
            className="description"
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
        <StyledAddButton className="button" type="submit">
          Add
        </StyledAddButton>
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
        id: uuid(),
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

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
`

const StyledH2 = styled.h2`
  margin: 1px 15px 15px 20px;
  padding: 20px 5px 5px;
`

const StyledLabel = styled.label`
  width: 90%;
  font-family: 'Didact Gothic', sans-serif;
  color: var(--dark-blue);
  font-size: 20px;
  padding: 15px 20px;
`

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--dark-orange-brown);
  background-color: var(--light-green);
  padding: 10px 15px;
  margin: 3px -3px;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 19px;
  opacity: 0.9;
  ::-webkit-input-placeholder {
    color: var(--dark-orange-brown);
  }
  :focus {
    outline: hidden 1px var(--dark-green);
    box-shadow: 0 0 0 1pt var(--dark-green);
  }
  ::-internal-autofill-selected {
    background-color: var(--light-green) !important;
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-radius: 5px;
  color: var(--dark-orange-brown);
  background-color: var(--light-green);
  font-family: 'Didact Gothic', sans-serif;
  font-size: 19px;
  border: 2px solid var(--dark-orange-brown);
  padding: 10px 15px;
  margin: 3px -3px;
  ::-webkit-input-placeholder {
    color: var(--dark-orange-brown);
  }
  :focus {
    outline: hidden 1px var(--dark-green);
    box-shadow: 0 0 0 1pt var(--dark-green);
  }
`
const StyledLine = styled.div`
  display: block;
  border-bottom: solid 1px var(--medium-grey);
  padding: 20px 0;
  width: 100%;
`

const StyledAddButton = styled.button`
  margin: 30px auto;
  justify-content: center;
  width: 126px;
  height: 40px;
  border-radius: 10px;
  background: var(--dark-brown);
  border: 2px solid var(--dark-orange-brown);
  color: var(--light-green);
  font-family: 'Didact Gothic';
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.39px;
  :active {
    background-color: var(--dark-green-transparent);
    color: var(--dark-brown);
  }
`

const StyledError = styled.p`
  font-family: 'Didact Gothic', sans-serif;
  color: var(--dark-orange-brown);
  font-size: 16px;
  margin: 1px 10px;
`
