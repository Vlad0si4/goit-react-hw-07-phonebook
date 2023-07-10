import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;
export const H1 = styled.h1`
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  // display: flex;
`;

export const StyledLabel = styled.label`
  width: 400px;

  padding: 20px 20px;

  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  font-size: 20px;
`;

export const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: calc((1vh + 1vw) * 1.2);
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 1px solid;
`;

export const StyleButton = styled.button`
  width: 180px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;

  &:hover {
    background-color: #00000033;
  }
`;
