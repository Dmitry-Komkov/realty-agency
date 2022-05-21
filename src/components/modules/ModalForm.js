import React, { useState } from 'react';
import tw, { styled } from "twin.macro";
import Typography from "../elements/Typography";
import {useDispatch, useSelector} from "react-redux";
import CloseButton from "../elements/CloseButton";
import {showModal} from "../../redux/slices/modalSlice";
import FormControl from "../elements/FormControl";
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from '../elements/Button';
import NumberFormat from 'react-number-format';

const endpoints = {
  form: "/api/form"
}

const Wrapper = styled.div(({show}) => [
  show ? tw`fixed top-0 left-0 w-full h-full z-50 bg-textDark bg-opacity-70` : tw`hidden`
])

const Container = tw.div`w-full h-full flex items-center justify-center`

const Outer = tw.div`relative bg-white w-4/5 p-8 rounded-md lg:(w-1/3)`

const Inner = tw.div``

const FormBox = tw.div``

const ErrorText = tw(Typography)`text-error`

const StyledInput = tw.input`bg-white border border-grayLight p-4 rounded-lg w-full focus:(ring-2 ring-primary)`
const StyledNumberInput = tw(NumberFormat)`bg-white border border-grayLight p-4 rounded-lg w-full focus:(ring-2 ring-primary)`

const FormMessageBox = styled.div(({state}) => [
  tw`w-full mx-auto text-center p-2 rounded-lg mt-2 lg:w-2/3`,
  state === "success" && tw`bg-success`,
  state === "error" && tw`bg-error`
])

const ModalForm = () => {
  const [formState, setFormState] = useState({
    successForm: false,
    errorForm: false
  });
  const state = useSelector(state => state.modalForm)
  const dispatch = useDispatch()
  const {register, handleSubmit, formState: { errors }, reset, control, setValue} = useForm()

  const onSubmit = async data => {
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
    <Wrapper id="modal" show={state.show}>
      <Container>
        <Outer>
          <CloseButton onClick={() => dispatch(showModal({title: '', hiddenField: ''}))}  />
          <Inner>
            <Typography as="h3" variant="h3" tw="text-center mb-4">{state.title}</Typography>
            <FormBox>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" defaultValue="" {...register("Место формы")} />
                <FormControl>
                  <Controller
                    control={control}
                    name="Имя"
                    defaultValue=""
                    rules={{
                      required: {
                        value: true,
                        message: "Это поле обязательно для заполнения."
                      },
                      pattern: {
                        value: /\D/gi,
                        message: "Используйте только буквы."
                      },
                      minLength: {
                        value: 3,
                        message: "Имя должно быть длиннее 3 символов."
                      }
                    }}
                    render={({ field, formState, fieldState: {invalid} }) => (
                      <StyledInput
                        placeholder="Ваше имя"
                        type="text"
                        error={invalid}
                        {...field}
                        {...formState}
                      />
                    )}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="Имя"
                    render={({message}) => <ErrorText>{message}</ErrorText>}
                  />
                </FormControl>
                <FormControl>
                  <Controller
                    control={control}
                    name="Телефон"
                    defaultValue=""
                    rules={{
                      required: {
                        value: true,
                        message: "Это поле обязательно для заполнения."
                      },
                    }}
                    render={({ field, formState }) => (
                      <StyledNumberInput
                        format="+7 (###) ###-##-##"
                        mask="_"
                        placeholder="Телефон"
                        type="tel"
                        {...field}
                        {...formState}
                      />
                    )}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="Телефон"
                    render={({message}) => <ErrorText>{message}</ErrorText>}
                  />
                </FormControl>
                <FormControl tw="text-center">
                  <Button
                    type="submit"
                    color="secondary"
                    onClick={() => setValue("Место формы", state.hiddenField)}
                  >
                    Оставить заявку
                  </Button>
                </FormControl>
              </form>
              { formState.successForm && <FormMessageBox state="success"><Typography tw="text-white">Ваша заявка успешно отправлена</Typography></FormMessageBox> }
              { formState.errorForm && <FormMessageBox state="error"><Typography>Произошла ошибка при отправке формы</Typography></FormMessageBox> }
            </FormBox>
          </Inner>
        </Outer>
      </Container>
    </Wrapper>
  );
}

export default ModalForm
