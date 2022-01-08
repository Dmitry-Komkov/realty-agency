import React from 'react'
import NumberFormat from 'react-number-format';
import { Controller, useForm } from "react-hook-form";
import tw, { styled, css } from 'twin.macro';
import Button from '../../elements/Button';

const StyledForm = tw.form`lg:grid lg:grid-cols-3`

const FormControl = styled.div(() => [
  tw`p-2`,
  css`
    button {
      ${tw`w-full`}
    }
  `
])

const StyledInput = tw.input`bg-white border border-grayLight p-4 rounded-lg w-full`
const StyledNumberInput = tw(NumberFormat)`bg-white border border-grayLight p-4 rounded-lg w-full`

const OneLineForm = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Controller
          render={({ field: { onChange } }) => {
            return (
              <StyledInput placeholder="Ваше имя" required={true} type="text" onChange={onChange} />
            )
          }}
          name="Имя"
          control={control}
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
        />
      </FormControl>
      <FormControl>
        <Button type="submit" color="secondary" size="large">Оставить заявку</Button>
      </FormControl>
    </StyledForm>
  )
}

export default OneLineForm
