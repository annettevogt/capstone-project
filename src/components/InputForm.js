import { yupResolver } from '@hookform/resolvers'
import React, { useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'

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

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledH2>Füge einen neuen Lieblingstee hinzu.</StyledH2>
        <StyledLabel>
          Name des Tees:
          <StyledInput
            name="name"
            onChange={handleChange}
            value={newTea.name}
            type="text"
            placeholder="Z.B. Milky Oolong"
            autoFocus
            minLength="5"
            maxLength="30"
            required
          />
          {newTea.name.length < 5 && (
            <StyledError>Your name requires at least 5 characters.</StyledError>
          )}
          {newTea.name.length > 30 && (
            <StyledError> Your name allows maximum 30 characters.</StyledError>
          )}
        </StyledLabel>
        <StyledLabel>
          Hier gekauft:
          <StyledInput
            name="pointPurchase"
            onChange={handleChange}
            value={newTea.pointPurchase}
            type="text"
            placeholder="Z.B. Bioladen Macis, Leipzig"
            minLength="10"
            maxLength="30"
            required
          />
          {newTea.pointPurchase.length < 10 && (
            <StyledError>
              Your point of purchase requires at least 10 characters.
            </StyledError>
          )}
          {newTea.pointPurchase.length >= 30 && (
            <StyledError>
              {' '}
              Your point of purchase allows maximum 30 characters.
            </StyledError>
          )}
        </StyledLabel>
        <StyledLabel>
          Beschreibe Deinen Lieblingstee:
          <StyledTextarea
            name="description"
            onChange={handleChange}
            value={newTea.description}
            type="text"
            placeholder="Z.B. fruchtig-sahniges Bukett. Aromen von Aprikose und süßer Milch."
            minLength="10"
            maxLength="300"
            required
          />
          {newTea.description.length < 10 && (
            <StyledError>
              Your description of purchase requires at least 10 characters.
            </StyledError>
          )}
          {newTea.description.length > 300 && (
            <StyledError>
              {' '}
              Your description allows maximum 300 characters.
            </StyledError>
          )}
        </StyledLabel>
        <StyledAddButton type="submit">Add</StyledAddButton>
        <StyledLine></StyledLine>
      </StyledForm>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    setTea(newTea)
    setNewTea({
      name: '',
      pointPurchase: '',
      description: '',
    })
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
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  background-color: var(--secondary-light);
`
const StyledH2 = styled.h2`
  margin: 15px;
  padding: 6px 5px;
`

const StyledLabel = styled.label`
  width: 90%;
  font-family: 'Didact Gothic', sans-serif;
  color: var(--primary-dark);
  font-size: 21px;
  padding: 15px 20px;
`

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 2px solid var(--tertiary-medium-dark);
  background-color: var(--secondary-medium-light);
  padding: 10px 15px;
  margin: 2px 0;
  font-family: 'Didact Gothic', sans-serif;
  font-size: 19px;
  opacity: 0.9;
  ::-webkit-input-placeholder {
    color: var(--tertiary-medium-dark);
  }
  :focus {
    outline: solid 1px var(--secondary-dark);
    box-shadow: 0 0 0 1pt var(--secondary-dark);
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
  margin: 2px 0 0 0;
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

  :focus {
    outline: hidden 1px var(--secondary-dark);
    box-shadow: 0 0 1px 1pt var(--secondary-dark);
  }
`

const StyledError = styled.p`
  font-family: 'Didact Gothic', sans-serif;
  color: var(--tertiary-medium-dark);
  font-size: 16px;
  margin: 1px 10px;
`
