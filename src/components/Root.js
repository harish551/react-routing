import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Class from '../containers/Class'
import Students from './Students'
import Subjects from './Subjects'
import NotFound from './NotFound'
import List from './List'

function hello(){
  console.log("helllooooo")
}
const Root = ({ state }, props) => (
  <Router>
    <div>
    <p>{console.log(props)}</p>
      <ul>
        <li>
          <Link to="/">Class</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/subjects">Subjects</Link>
        </li>
        <li>
          <Link to="/list" onClick={props.fetchingStudentsList} >List</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Class} />
        <Route path="/students" component={Students} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/list"  component={()=> <List list={state.listReducer.data} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)


export default Root
