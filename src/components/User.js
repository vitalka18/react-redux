import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    const { name } = this.props
    return <nav className='navbar navbar-default'>
      <div className='navbar-header'>
        <a className='navbar-brand'>Привет, {name}</a>
      </div>
    </nav>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
}