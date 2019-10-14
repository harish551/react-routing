import React from 'react'
import { Route, Link } from 'react-router-dom'

const Item = ({ match }) => <p>{match.params.id}</p>

class Items extends React.Component {

  render(){
    const { url } = this.props.match
    return (
      <div className="Items">
        <h1 style={{textAlign:"center"}}> Items </h1>
        <strong>select a Item</strong>
        <ul>
          <li>
            <Link to="/items/1">Item 1 </Link>
          </li>
          <li>
            <Link to="/items/2">Item 2 </Link>
          </li>
          <li>
            <Link to="/items/3">Item 3 </Link>
          </li>
        </ul>
        <Route path="/items/:id" component={Item} />
      </div>
    )
  }
}

export default Items
