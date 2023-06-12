import React from 'react';
import PropTypes from 'prop-types';
import { RandomButtonStyled } from './RandomButton.styled';

export const RandomButton = ({ children, onClick, ...allyProps }) => {
  return (
    <RandomButtonStyled onClick={onClick} type="button" {...allyProps}>
      {children}
    </RandomButtonStyled>
  );
};

RandomButton.defaultProps = {
  onClick: () => null,
  children: null,
};

RandomButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
