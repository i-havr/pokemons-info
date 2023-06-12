import styled from 'styled-components';

export const LoadMoreButtonStyled = styled.button`
  padding: 8px 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  border: 0;
  border-radius: 4px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  cursor: pointer;
  width: auto;
  margin-top: -8px;
  margin-bottom: -8px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
