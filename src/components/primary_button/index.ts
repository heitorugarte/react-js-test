import styled from "styled-components";

const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: #a9cce3;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #7fb3d5;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;

export default PrimaryButton;
