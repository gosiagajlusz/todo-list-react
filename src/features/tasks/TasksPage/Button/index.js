import styled from "styled-components";

export const DownloadButton = styled.button`
align-items: center;
background-color: transparent;
border: 0 transparent;
color: ${({ theme }) => theme.colors.primaryColor};
display: flex;
flex-wrap: wrap;
justify-content: center;
transition: 0.5s;

&:hover {
  color: rgb(116, 186, 186);
}

&:disabled {
  color: grey;
}
`;
