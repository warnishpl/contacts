import styled, { css } from "styled-components";
import chevronDown from "../../assets/chevron-down.svg?react";

const ChldrensOfPhoneInputWrapper = css`
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  transition: background-color 0.3s ease;
  &:focus-within {
    outline: none;
  }
`;

export const PrefixList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 8px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  ${ChldrensOfPhoneInputWrapper}
  p {
    padding-right: 3px;
  }
`;

export const PhoneInputField = styled.input`
  width: 100%;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 5px;
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.text};
  ${ChldrensOfPhoneInputWrapper}
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  border-radius: 10px;
  width: 260px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;
  &:hover,
  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.inputOutline};
    ${PrefixList}, ${PhoneInputField} {
      border: none;
      background-color: ${({ theme }) => theme.colors.inputBackground};
    }
  }
  ${({ $isDropdownShown }) =>
    $isDropdownShown
      ? css`
          outline: 1px solid ${({ theme }) => theme.colors.inputOutline};
          background-color: ${({ theme }) => theme.colors.inputBackground};
        `
      : css`
          outline: none;
        `}
`;

export const ChevronStyled = styled(chevronDown)`
  width: 16px;
  transition: transform 0.3s ease-out;
  ${({ $isDropdownShown }) =>
    $isDropdownShown
      ? css`
          transform: rotateX(180deg);
        `
      : css`
          transform: none;
        `}
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  height: 200px;
  width: 250px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.itemBackground};
  opacity: 0.9;
  overflow: auto;
  border-bottom-right-radius: 10px;
  scrollbar-gutter: stable;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.button};
    border-radius: 10px;
  }
`;
export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.inputBackground};
  }
`;
export const Img = styled.img`
  height: 20px;
  aspect-ratio: 1.5;
`;
export const Paragraph = styled.p`
  margin-left: 10px;
  text-align: start;
  color: ${({ theme }) => theme.colors.text};
`;
