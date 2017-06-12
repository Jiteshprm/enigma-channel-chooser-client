import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const BouquetList = ({ bouquets, onTodoClick }) => (
  <ul>
    {bouquets.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

BouquetList.propTypes = {
    bouquets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default BouquetList
