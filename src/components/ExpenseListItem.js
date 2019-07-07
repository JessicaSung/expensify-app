import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  // console.log('id', id);

  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount}-{createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;

// import actions from actions generator
// connect to dispatch - don't need anything from state
// wire onClick
// have access to ID
