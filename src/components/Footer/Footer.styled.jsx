import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const NavLinkStyled = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: ${p => p.theme.space[3]}px;
//   padding: ${p => p.theme.space[3]}px;
//   border-radius: ${p => p.theme.radii.normal};
//   text-decoration: none;
//   color: ${p => p.theme.colors.text};

//   &.active {
//     background-color: ${p => p.theme.colors.primary};
//     color: ${p => p.theme.colors.white};
//   }

//   :hover:not(.active),
//   :focus-visible:not(.active) {
//     color: ${p => p.theme.colors.primary};
//   }
// `;

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 16px 0px;
  margin-top: auto;
  border-top: 3px solid ${p => p.theme.colors.yellow};
  background-image: linear-gradient(
    ${p => p.theme.colors.bluegrey},
    ${p => p.theme.colors.darkblue}
  );
  /* background-color: #bfb3a8; */
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FooterContentStyled = styled.div`
  /* width: 100%; */
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;
`;

export const FooterTextStyled = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
  color: ${p => p.theme.colors.grey};
`;
