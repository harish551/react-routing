import React from 'react'
import { Route, Link } from 'react-router-dom'

const Subject = ({ match }) => <p>{match.params.id}</p>

class Subjects extends React.Component {

  render(){
    const { url } = this.props.match
    return (
      <div className="Subjects">
        <h1 style={{textAlign:"center"}}> subjects </h1>
        <strong>select a subject</strong>
        <ul>
          <li>
            <Link to="/subjects/1">Subject 1 </Link>
          </li>
          <li>
            <Link to="/subjects/2">Subject 2 </Link>
          </li>
          <li>
            <Link to="/subjects/3">Subject 3 </Link>
          </li>
        </ul>
        <Route path="/subjects/:id" component={Subject} />
      </div>
    )
  }
}

export default Subjects
