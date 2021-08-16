import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
function Header(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="navbar-header">
    <div className="navbar-brand">{props.title}</div>
  </div>
</nav>     
    )
}

Header.propTypes={
    title: PropTypes.string,
    searchBar: PropTypes.bool
}

export default Header
