import styled from 'styled-components';

export const SectionStyled = styled.section`
  display: block;
  margin: 0 auto 32px auto;

  @media screen and (min-width: 1200px) {
    max-width: 1600px;
  }

  & > h2 {
    text-align: center;
  }
`;
