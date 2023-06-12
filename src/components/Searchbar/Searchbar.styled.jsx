import styled from 'styled-components';

export const SearchbarStyled = styled.div`
  width: 240px;
  height: 64px;
  padding: 0;
`;

export const SearchFormStyled = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

// export const SearchFormButtonStyled = styled.button`
//   display: inline-block;
//   width: 48px;
//   height: 48px;
//   border: 0;
//   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
//   background-size: 40%;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;

//   &: hover {
//     opacity: 1;
//   } ;
// `;

// export const SearchFormButtonLabelStyled = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;

export const SearchFormInputStyled = styled.input`
  /* display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  } */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  padding-left: 16px;
  padding-right: 48px;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.03em;
  outline: 3px solid ${p => p.theme.colors.yellow};
  color: ${p => p.theme.colors.text};
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};
`;
