import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import UserListComponent from '../components/UserListComponent'

export default class HomePages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: "1",
                    name: "Mark",
                    surname: "Otto",
                    username:  "mdo",
                },
                {
                    id: "2",
                    name: "Jacob",
                    surname: "Thornton",
                    username: "fat",
                },
                {
                    id: "3",
                    name: "Larry",
                    surname:  "Bird",
                    username: "twitter",
                }

            ]
        }
    }
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

                <UserListComponent  users = {this.state.users}/>
            </div>
        )
    }
}
