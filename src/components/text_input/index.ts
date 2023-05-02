import styled from "styled-components";

const TextInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: #333;
  font-size: 16px;
  font-family: Arial, sans-serif;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

export default TextInput;
