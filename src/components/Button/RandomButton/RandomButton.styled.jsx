import styled from 'styled-components';

export const RandomButtonStyled = styled.button`
  position: relative;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -16px;
  margin-bottom: -16px;
  padding: 4px 8px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  background-color: ${p => p.theme.colors.blue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  & > span {
    margin-left: 4px;
    font-size: 14px;
    color: ${p => p.theme.colors.white};
  }

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
