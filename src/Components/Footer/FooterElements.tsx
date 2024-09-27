import styled from "styled-components";

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 56px 0 56px;
  background-color: #202020;
  min-height: 96px;
  height: fit-content;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 0;
  }
`;

export const FooterText = styled.div`
  padding: 0 56px 0 56px;
  color: white;
  font-size: 16px;
  align-self: center;
  text-align: center;
`;
