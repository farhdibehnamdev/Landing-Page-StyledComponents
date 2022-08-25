import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  margin: 40px 0;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  flex-direction: row-reverse;
  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
