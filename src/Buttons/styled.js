import styled, { css } from "styled-components";

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 15px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr;
    padding: 5px;
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0 transparent;
  color: teal;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    color: rgb(116, 186, 186);
  }

  &:disabled {
    color: grey;

    //media queries dodac poprzez theme z osobnego pliku, wyeksportowac go ale gdzie go importowac ?
  }
`;
