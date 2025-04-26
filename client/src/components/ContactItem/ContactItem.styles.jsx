import styled, { css } from "styled-components";
import media from "../../styles/media";

export const ContactItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  margin-bottom: 15px;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.itemBackground};
  transition: 0.3s ease-in;
  ${media.lg`
		margin-bottom: 5px;

		${({ $isExtended }) =>
      $isExtended
        ? css`
            background-color: ${({ theme }) => theme.colors.button};
            height: 120px;
            &:hover {
              background-color: ${({ theme }) => theme.colors.buttonHover};
            }
          `
        : css`
            height: 50px;
            &:hover {
              background-color: ${({ theme }) =>
                theme.colors.itemBackgroundHover};
            }
          `}
	`}
`;

export const PersonalDataWrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: [picture-left] 72px [picture-right]20px[name-left] auto [name-right] 0 [del-left]auto[del-right];
  grid-template-rows: [top] 1fr [mid] 1fr [bottom];
  padding: 20px;
  align-items: center;
  font-size: 16px;
  ${media.lg`
	padding: 10px;
	${({ $isExtended }) =>
    $isExtended
      ? css`
          grid-template-columns: [picture-left] 72px [picture-right]20px[name-left] auto [name-right] 0 [del-left]auto[del-right];
          grid-template-rows: [top] 1fr [mid] 1fr [bottom];
        `
      : css`
          grid-template-columns:
            [name-left] minmax(200px, 400px)
            [name-right] 0 [phone-left] minmax(150px, 300px)
            [phone-right] 0[del-left] 75px [del-right];
          grid-template-rows: [top] 1fr [bottom];
        `}
	`}
`;
export const PictureWrapper = styled.div`
  grid-column: picture-left / picture-right;
  grid-row: top / bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    width: 72px;
    height: 72px;
    ${media.lg`
		${({ $isExtended }) =>
      $isExtended
        ? css`
            transition: 0.5s ease;
          `
        : css`
            width: 0px;
            height: 0px;
          `}
	`}
  }
`;
export const NameWrapper = styled.div`
  grid-column: name-left / name-right;
  grid-row: top / mid;
  ${media.lg`
		${({ $isExtended }) =>
      $isExtended
        ? css`
            grid-column: name-left / name-right;
            grid-row: top / mid;
          `
        : css`
            grid-column: name-left / name-right;
            grid-row: top / bottom;
          `}
		
	`}
`;
export const PhoneWrapper = styled.div`
  display: flex;
  grid-column: name-left / del-right;
  grid-row: mid / bottom;
  align-items: center;
  white-space: nowrap;
  margin-right: 10px;
  gap: 10px;
  ${media.lg`
		${({ $isExtended }) =>
      $isExtended
        ? css`
            grid-column: name-left / del-right;
            grid-row: mid / bottom;
          `
        : css`
            grid-column: phone-left / phone-right;
            grid-row: top / bottom;
          `}
	`}
`;
export const Paragraph = styled.p`
  whitespace: nowrap;
  overflow: hidden;
  textoverflow: ellipsis;
`;
export const FunctionIconsWrapper = styled.div`
  grid-column: del-left / del-right;
  grid-row: top / mid;
  justify-self: right;
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
  ${media.lg`
		${({ $isExtended }) =>
      $isExtended
        ? css`
            grid-row: top / bottom;
          `
        : css`
            grid-row: top / mid;
          `}
	`}
`;
