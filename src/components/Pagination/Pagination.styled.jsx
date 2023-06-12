import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationWrapperStyled = styled.div`
  margin: 0 auto 0 auto;
`;

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  border-radius: 5px;
  background-color: ${p => p.theme.colors.background};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);

  & > .active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
  }
  & a {
    width: 100%;
    height: 100%;
    /* padding: 4px 8px; */
  }

  & > li {
    display: flex;
    justify-content: center;
    min-width: 32px;
    padding: 4px;
    text-align: center;
    text-transform: uppercase;
    color: ${p => p.theme.colors.text};
    font-weight: bold;
    border: 1px solid ${p => p.theme.colors.grey};
    border-radius: 5px;
    cursor: pointer;
  }
  & > li:not(:last-child) {
    margin-right: 8px;
  }

  & > li:hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
