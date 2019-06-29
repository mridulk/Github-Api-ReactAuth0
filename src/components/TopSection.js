import React, { Component } from 'react'
import {Navbar,Nav,NavItem} from 'react-bootstrap'
class TopSection extends Component {
    onLogin(){
        this.props.onLogin()
    }
    onLogout(){
        this.props.onLogout()
    }
    render() {
        let condition;
        if(this.props.accessToken){
            condition=<Nav>
            <a href="#"><NavItem onClick={this.onLogout.bind(this)}>LogOut</NavItem></a>
        </Nav>
        }
        else{
            condition=<Nav>
            <a href="#"><NavItem onClick={this.onLogin.bind(this)}>Login</NavItem></a>
        </Nav>
        }
        return (
            <Navbar>
                
                    <Navbar.Brand>
                        Github Searcher
                    </Navbar.Brand>
                
                {condition}
               
            </Navbar>
        )
    }
}

export default TopSection 