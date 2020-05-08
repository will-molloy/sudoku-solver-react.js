import React from 'react';

const Cell = ({ value }) => {
  return <td>{value === 0 ? '' : value}</td>;
};

export default Cell;
