import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  padding: 15px 60px 15px 60px;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
