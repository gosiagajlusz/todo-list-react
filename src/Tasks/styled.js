import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  background-color: white;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
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
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
