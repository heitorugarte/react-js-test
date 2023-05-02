import styled from "styled-components";

const SecondaryButton = styled.button`
  padding: 12px 20px;
  background-color: transparent;
  border: 2px solid #a9cce3;
  border-radius: 5px;
  font-size: 16px;
  color: #a9cce3;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #a9cce3;
    color: #fff;
    box-shadow: none;
  }
`;

export default SecondaryButton;
