import styled, { css } from "styled-components";

export const FormWrapper = styled.form`
  background-color: white;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;

  &:focus {
    border: 2px solid black;
  }
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: white;
  padding: 10px;
  border: none;
  transition: 1s;
  flex-basis: 100%;
  &:hover {
    background-color: rgb(98, 154, 154);
    transform: scale(1.15);
  }
`;
