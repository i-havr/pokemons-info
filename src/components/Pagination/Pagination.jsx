import { useState, useEffect } from 'react';
import { PaginationStyled } from './Pagination.styled';

export const PaginatedItems = ({
  itemsPerPage,
  pokemonsList,
  getCurrentOffset,
}) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (!pokemonsList) {
      return;
    }
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(pokemonsList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pokemonsList.length / itemsPerPage));
    getCurrentOffset(itemOffset);
  }, [pokemonsList, itemOffset, itemsPerPage, getCurrentOffset]);

  const handlePageClick = event => {
    const newOffset =
      ((event.selected + 1) * itemsPerPage - itemsPerPage) %
      pokemonsList.length;
    console.log(
      `User requested page number ${
        event.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <PaginationStyled
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

// Add a <div id="container"> to your HTML to see the componend rendered.
// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById('container')
// );
