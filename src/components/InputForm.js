import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

// const projectSchema = yup.object().shape({
//   name: yup.string().min(5).max(30).required(),
//   pointPurchase: yup.string().min(10).max(30).required(),
//   description: yup.string().min(10).max(300).required(),
// })

// export default function AddNewProjectForm({ updateProjectList }) {
//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(projectSchema),
//   })

export default function InputForma() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledH2>Füge einen neuen Lieblingstee hinzu.</StyledH2>
      <StyledLabel>
        Name des Tees:
        <StyledInput
          name="name"
          placeholder="Z.B. Milky Oolong"
          ref={register({
            required: true,
            minLength: 5,
            maxLength: 30,
          })}
        />
        {errors.name && errors.name.type === 'required' && (
          <StyledParagraph>Your name is required.</StyledParagraph>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <StyledParagraph>
            Your name requires at least 5 characters.
          </StyledParagraph>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <StyledParagraph>
            Your name allows maximal 30 characters.
          </StyledParagraph>
        )}
      </StyledLabel>
      <StyledLabel>
        Hier gekauft:
        <StyledInput
          name="pointPurchase"
          placeholder="Z.B. Bioladen Macis, Leipzig"
          ref={register({
            required: true,
            minLength: 10,
            maxLength: 30,
          })}
        />
        {errors.pointPurchase && errors.pointPurchase.type === 'required' && (
          <StyledParagraph>Your point of purchase is required.</StyledParagraph>
        )}
        {errors.pointPurchase && errors.pointPurchase.type === 'minLength' && (
          <StyledParagraph>
            Your point of purchase requires at least 10 characters.
          </StyledParagraph>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <StyledParagraph>
            Your name allows maximal 30 characters.
          </StyledParagraph>
        )}
      </StyledLabel>
      <StyledLabel>
        Beschreibe Deinen Lieblingstee:
        <StyledTextarea
          name="description"
          placeholder="Z.B. fruchtig-sahniges Bukett. Aromen von Aprikose und süßer Milch."
          ref={register({
            required: true,
            minLength: 10,
            maxLength: 300,
          })}
        />
        {errors.description && errors.description.type === 'required' && (
          <StyledParagraph>Your description is required.</StyledParagraph>
        )}
        {errors.description && errors.description.type === 'minLength' && (
          <StyledParagraph>
            Your description requires at least 10 characters.
          </StyledParagraph>
        )}
        {errors.description && errors.description.type === 'maxLength' && (
          <StyledParagraph>
            Your description allows maximal 300 characters.
          </StyledParagraph>
        )}
      </StyledLabel>
      <StyledAddButton type="submit">Add</StyledAddButton>
      <StyledLine></StyledLine>
    </StyledForm>
  )
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

const StyledParagraph = styled.p`
  font-family: 'Didact Gothic', sans-serif;
  color: var(--tertiary-medium-dark);
  font-size: 16px;
  margin: 1px 10px;
`
