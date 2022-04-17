import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import UserListComponent from '../components/UserListComponent';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';


export default class HomePages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: uuidv4(),
                    name: "Mark",
                    surname: "Otto",
                    username:  "mdo",
                },
                {
                    id: uuidv4(),
                    name: "Jacob",
                    surname: "Thornton",
                    username: "fat",
                },
                {
                    id: uuidv4(),
                    name: "Larry",
                    surname:  "Bird",
                    username: "twitter",
                }

            ]
        };
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    addUser = ( name, surname, username) => {
        if(name, surname, username) {
            const users = [...this.state.users];
        users.push({
            id: uuidv4(),
            name: name,
            surname: surname,
            username: username,
        });     
        this.setState({ users }); 
        toast( '"${name}" istifadeci elave edildi.');
        }
        else{
            alert('Please fill all fields');
        }
    };

    deleteUser =(obj)=>{
        const users = this.state.users.filter(user=>{
            return user.id !== obj.id
        })
        this.setState({ users });
        toast( '"${obj.name}" istifadeci silindi.');

    }


    render() {
        return (
            <div>
                <ToastContainer />
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                        react-intro
                    </NavbarBrand>

                </Navbar>

                <UserListComponent  users = {this.state.users} addUser= {this.addUser} deleteUser = {this.deleteUser} />
            </div>
        )
    }
}
