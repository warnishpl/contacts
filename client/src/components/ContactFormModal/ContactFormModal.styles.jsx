import styled, { css } from "styled-components";
import media from "../../styles/media";
import defaultAvatar from "../../assets/default_avatar_black.jpg";

import DeleteAvatarIcon from "../../assets/circle-minus.svg?react";
import AddAvatarIcon from "../../assets/circle-plus.svg?react";

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundTransparent};
  z-index: 0;
  ${media.lg`
	display: none;
	`}
`;
export const AddContactFormWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, +50%);
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  ${media.lg`
		position: static;
		grid-row: header-bottom / content-bottom;
		grid-column: content-start / content-mid;
		transform: translate(0, 0);
	`}
`;

export const AddContactBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  min-height: 80vh;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.itemBackground};
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  min-height: 340px;
  transition: background-color 0.3s ease;
  ${media.sm`
		align-self: flex-start;
		width: 400px;
		min-height: 370px;
	`}
`;
export const IconWrapper = styled.div`
  ${media.lg`
	display: none;
	`}
`;
export const Header = styled.div`
  width: 100%;
  padding: 20px;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  p {
    font-size: 16px;
    font-weight: bold;
  }
  ${media.lg`
	grid-template-columns: auto;
	`}
`;
export const InputsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputTitle = styled.div`
  align-self: start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  padding: 20px 0 5px 0;
  & > p {
    padding-left: 10px;
  }
  & > p + p {
    font-size: 12px;
  }
`;
export const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.itemBackground};
`;
export const ImagePreview = styled.div`
  position: absolute;

  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.colors.itemBackground};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(${defaultAvatar});
  ${({ $imageSrc }) =>
    $imageSrc &&
    css`
      background-image: url(${$imageSrc});
    `}
`;
export const ImgInput = styled.input`
  position: absolute;
  opacity: 0.1; //0
  width: 200px;
  height: 200px;
  cursor: pointer;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;
export const NameInputField = styled.input`
  border-radius: 10px;
  width: 260px;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    border: none;
    outline: 1px solid ${({ theme }) => theme.colors.inputOutline};
    background-color: ${({ theme }) => theme.colors.inputBackground};
  }
`;

export const AvatarSign = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DeleteAvatarIconStyled = styled(DeleteAvatarIcon)`
  position: absolute;
  top: -35px;
  left: -55px;
  background-color: #fff;
  border-radius: 50%;
  color: black;
  cursor: pointer;
`;
export const AddAvatarIconStyled = styled(AddAvatarIcon)`
  position: absolute;
  top: -35px;
  left: -55px;
  background-color: #fff;
  border-radius: 50%;
  color: black;
  cursor: pointer;
`;
export const RedP = styled.p`
  color: red;
`;
