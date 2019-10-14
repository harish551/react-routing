import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'


 const List = ({ list }) => (
      <div className="List">
        <h1 style={{textAlign:"center"}}> Students List </h1>
        <ul>
        {list.map(a => (
            <li><p>{a}</p></li>
        ))}
    </ul>
      </div>
    );

List.propTypes = {
    list: PropTypes.array.isRequired
};

export default List
