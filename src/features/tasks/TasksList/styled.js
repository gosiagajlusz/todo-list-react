import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  background-color: white;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (max-width: 897px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgb(198, 196, 196);

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border-style: none;
  color: white;
  width: 30px;
  height: 30px;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: background 0.5s 0.5s linear;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background-color: green;
      &:hover {
        background-color: rgb(68, 125, 68);
      }
    `};

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: red;
      &:hover {
        background-color: rgb(237, 125, 125);
      }
    `}
`;
