import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  padding:10px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  font-size: 15px;
  flex: 1;
  color: red;
  margin-left: 10px;
`;

const InputContainer = () => {
  return (
    <Container>
      <TextInput placeholder="Clayton Alves Ferreira Junior" />
    </Container>
  );
};

export default InputContainer;
