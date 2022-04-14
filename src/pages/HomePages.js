import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import UserListComponent from '../components/UserListComponent'

export default class HomePages extends Component {
  render() {
    return (
        <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
            react-intro
          </NavbarBrand>
          
        </Navbar>

        <UserListComponent />
      </div>
    )
  }
}
