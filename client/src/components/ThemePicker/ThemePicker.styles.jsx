import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  color: black;
`;

export const ThemeWrapper = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.itemBackground};
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  top: -15px;
  left: -150px;
  flex-direction: row;
`;

export const ThemeBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;

  cursor: pointer;
  background: linear-gradient(
    to bottom right,
    ${(props) => props.$primary} 50%,
    ${(props) => props.$secondary} 50%
  );
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const HoverEffect = styled.div`
  &:hover ${ThemeBox} {
    transform: scale(1.2);
  }
`;
