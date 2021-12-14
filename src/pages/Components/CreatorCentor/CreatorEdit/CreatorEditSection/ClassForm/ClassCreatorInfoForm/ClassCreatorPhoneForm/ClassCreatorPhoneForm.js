import React, { useState } from 'react';
import styled from 'styled-components';
import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassCreatorPhoneForm = ({ register, errors, watch }) => {
  // watch(value => value?.creatorPhone?.replace(/^[0-9]*$/, ''));

  return (
    <Container>
      <Input
        {...register('creatorPhone', {
          pattern: {
            value: /^[0-9]{9,11}$/,
            message: '⚠️ 올바른 휴대폰 번호가 아닙니다.',
          },
        })}
        placeholder="'-'를 제외하고 입력해주세요."
      />
      <ErrorMessage>{errors?.creatorPhone?.message}</ErrorMessage>
    </Container>
  );
};

export default ClassCreatorPhoneForm;

const ErrorMessage = styled(CreatorStyled.ErrorMessageStyled)``;

const Input = styled(CreatorStyled.InputStyled)``;

const Container = styled(CreatorStyled.InputContainerStyled)``;
