import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  background-color: hsl(0, 0%, 100%);
  margin: 10px;
  box-shadow: 1px 1px rgb(185, 183, 183);
`;
export const Header = styled.header`
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width:${({theme})=>theme.breakpoints.mobile}px) {
    grid-gap: 10px;
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
padding: 10px;
  margin: 0;
`

export const Body = styled.div`
//czy to ma sens? trzymam diva dla grida, moze powinien być tylowany tutaj, 
//ale skoro działa,wygląda ok to czy jest sens zmieniać?
`