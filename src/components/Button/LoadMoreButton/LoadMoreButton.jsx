import PropTypes from 'prop-types';
import { LoadMoreButtonStyled } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onLoadMoreClick }) => {
  return (
    <LoadMoreButtonStyled type="button" onClick={() => onLoadMoreClick()}>
      <span>Load more</span>
    </LoadMoreButtonStyled>
  );
};

LoadMoreButton.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
};
