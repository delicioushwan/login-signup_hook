import React, { lazy, Suspense} from 'react';

import useForm from '../../Utils/useForm';
import useInput from '../../Utils/useInput';
import Input from '../../Components/Input';
import Modal from '../../Components/Modal';
import useModal from '../../Components/Modal/useModal';
import useAuth from '../../Utils/useAuth';

import {
  Btn, Form, Registration,
} from './styled';

const SignUp = lazy(() => import('../SignUp'));

export default () => {
  const auth = useAuth();
  const form = useForm();
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
      },
      placeholder: '비밀번호',
      type: 'password'
    },
    form
  );
  const {isShowing, toggle} = useModal();
  return (
    <div style={{width: '400px', margin: 'auto'}}>
      <h1>로그인</h1>
      <Form onSubmit={e => {
        e.preventDefault();
        auth.logIn();
      }}>
        <div>휴대폰번호 "-" 없이 입력</div>
        <Input {...phoneInput} />
        <Input {...passwordInput} />
        <Btn disabled={form.isValid()}>로그인</Btn>
      </Form>
      <Registration>
        <Btn onClick={toggle}>회원가입</Btn>
      </Registration>
      <Modal
        title={'회원가입'}
        isShowing={isShowing}
        modalHandler={toggle}
        notClosing
        height={500}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <SignUp />
        </Suspense>
      </Modal>
    </div>
  )
}