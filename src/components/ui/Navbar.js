import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => "nav-item nav-link" + (isActive ? ' demo' : '')}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => "nav-item nav-link" + (isActive ? ' demo' : '')}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => "nav-item nav-link" + (isActive ? ' demo' : '')}
            to="/search"
          >
            Search
          </NavLink>

        </div>
      </div>


      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
        <ul className="navbar-nav ml-auto">
          <NavLink
            className={({ isActive }) => "nav-item nav-link" + (isActive ? ' demo' : '')}
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}