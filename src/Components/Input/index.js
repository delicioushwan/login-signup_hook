import React from 'react';
import {
  InputContainer, Ul
} from './styled';

export default ({ errors, margin, ...props }) => {
  return (
    <InputContainer hasErrors={errors.length > 0} margin={margin}>
      <input {...props} />
      {errors.length > 0 && (
        <Ul>
          {errors.map((error, key) => <li key={key}>{error}</li>)}
        </Ul>)}
    </InputContainer>
  );
};
