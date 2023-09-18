import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
  render() {
    return (
        <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Shawty News</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home </a>
      <a className="nav-item nav-link" href="#">About</a>
    </div>
  </div>
</nav>
      </div>
      </>
    )
  }
}

export default NavBar
