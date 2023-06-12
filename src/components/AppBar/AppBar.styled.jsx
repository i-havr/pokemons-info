import styled from 'styled-components';

export const AppBarStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-bottom: 32px;
  padding: 0 128px;
  border-bottom: 3px solid ${p => p.theme.colors.yellow};
  background-image: linear-gradient(
    ${p => p.theme.colors.darkblue},
    ${p => p.theme.colors.bluegrey}
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 100;
`;

export const AppBarWrapperStyled = styled.div`
  display: flex;
`;
