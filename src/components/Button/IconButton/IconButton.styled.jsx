import styled from 'styled-components';

export const IconButtonStyled = styled.button`
  position: absolute;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.white};
  fill: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
