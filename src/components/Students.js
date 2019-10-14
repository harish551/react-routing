import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'

const Student = ({ match }) => <p>{match.params.id}</p>

 const Students = (props) => (
      <div className="Students">
      <p>{console.log(props)}</p>
        <h1 style={{textAlign:"center"}}> Students </h1>
        <strong>select student</strong>
        <ul>
          <li>
            <Link to="/students/1">Student 1 </Link>
          </li>
          <li>
            <Link to="/students/2">Student 2 </Link>
          </li>
          <li>
            <Link to="/students/3">Student 3 </Link>
          </li>
        </ul>
        <Route path="/students/:id" component={Student} />
      </div>
    );

Students.propTypes = {
    students: PropTypes.array.isRequired
};

export default Students
