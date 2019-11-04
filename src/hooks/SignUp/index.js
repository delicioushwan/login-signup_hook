import React from 'react';

import useForm from '../../Utils/useForm';
import useInput from '../../Utils/useInput';
import Input from '../../Components/Input';

import { Btn, Form } from './styled';

export default () => {
  const form = useForm();
  const nameInput = useInput(
    {
      name: 'name',
      validation: {
        required: true,
      },
      placeholder: '상호명',
      margin: '20px 0 0 0'
    },
    form
  );
  const phoneInput = useInput(
    {
      name: 'phoneNumber',
      validation: {
        required: true,
        phoneNumber: true,
      },
      placeholder: '휴대폰번호',
    },
    form
  );
  const passwordInput = useInput(
    {
      name: 'password',
      validation: {
        required: true,
        minLength: 6,
      },
      placeholder: '비밀번호',
      type: 'password',
    },
    form
  );
  const checkPasswordInput = useInput(
    {
      name: 'checkPassword',
      validation: {
        required: true,
        minLength: 6,
        customValidator: () => {
          if (passwordInput.value !== checkPasswordInput.value) return '비밀번호가 일치하지 않습니다.'
        }
      },
      placeholder: '비밀번호',
      type: 'password',
    },
    form
  );

  return (
    <div>
      <Form onSubmit={e => {
        e.preventDefault();
        console.log('submit', form.values)
      }}>
        <Input {...nameInput} />
        <Input {...phoneInput} />
        <Input {...passwordInput} />
        <Input {...checkPasswordInput} />
        <Btn disabled={form.isValid()}>회원가입</Btn>
      </Form>
    </div>
  )
}