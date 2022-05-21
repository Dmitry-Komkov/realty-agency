import React, {useState} from 'react'
import NumberFormat from 'react-number-format';
import { Controller, useForm } from "react-hook-form";
import tw, { styled, css } from 'twin.macro';
import Button from '../../elements/Button';
import Typography from '../../elements/Typography';

const endpoints = {
  contact: "/.netlify/functions/sendEmail",
  form: "/api/form"
}

const StyledForm = tw.form`lg:grid lg:grid-cols-3`

const FormControl = styled.div(() => [
  tw`p-2`,
  css`
    button {
      ${tw`w-full`}
    }
  `
])

const FormMessageBox = styled.div(({state}) => [
  tw`w-2/3 mx-auto text-center p-2 rounded-lg mt-2 lg:w-1/2`,
  state === "success" && tw`bg-success`,
  state === "error" && tw`bg-error`
])

const StyledInput = tw.input`bg-white border border-grayLight p-4 rounded-lg w-full`
const StyledNumberInput = tw(NumberFormat)`bg-white border border-grayLight p-4 rounded-lg w-full`

const OneLineForm = () => {
  const [formState, setFormState] = useState({
    successForm: false,
    errorForm: false
  });

  const [submittedData, setSubmittedData] = useState({});

  const { control, handleSubmit, reset } = useForm();
  
  const onSubmit = async data => {
    setSubmittedData(data)
    const body = JSON.stringify(data)

    const options = {
      method: 'post',
      headers: {
        "content-type": "application/json",
      },
      body
    }

    await window
      .fetch(endpoints.form, options)
      .then(res => {
        console.log(res)
        if (res.ok) {
          reset()

          setFormState({
            successForm: true,
            errorForm: false,
          })
        } else {
          reset()

          setFormState({
            successForm: false,
            errorForm: true,
          })
        }
      })
      .catch(e => console.warn('Произошла ошибка при отправке формы... ', e))
  }

  return (
    <>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Controller
          render={({ field }) => {
            return (
              <StyledInput placeholder="Ваше имя" required={true} type="text" {...field} />
            )
          }}
          name="Имя"
          control={control}
          defaultValue=""
        />
      </FormControl>
      <FormControl>
        <Controller
          render={({ field }) => {
            return (
              <StyledNumberInput defaultValue="нет" placeholder="Телефон" required={true} type="tel" {...field} format="+7 (###) ###-##-##" mask="_" />
            )
          }}
          name="Телефон"
          control={control}
          defaultValue=""
        />
      </FormControl>
      <FormControl>
        <Button type="submit" color="secondary" size="large">Оставить заявку</Button>
      </FormControl>
    </StyledForm>
    { formState.successForm && <FormMessageBox state="success"><Typography tw="text-white">Ваша заявка успешно отправлена</Typography></FormMessageBox> }
    { formState.errorForm && <FormMessageBox state="error"><Typography>Произошла ошибка при отправке формы</Typography></FormMessageBox> }
    </>
  )
}

export default OneLineForm
