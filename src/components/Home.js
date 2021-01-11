import React, { Component } from 'react';
import Login from './auth/Login';
import Registration from './auth/Registration'
import axios from 'axios'

class Home extends Component {

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }
    handleLogoutClick = () => {
        axios.delete("http://localhost:3001/logout", { withCredentials: true })
        .then(response => {
            this.props.handleLogout()
        })
        .catch(err => {
            console.log("logout error: ", err)
        })
    }

    render() {
        return (
            <div>
                <h1> HOME </h1>
                <h1> Status: {this.props.loggedInStatus} </h1>
                <button onClick={()=>this.handleLogoutClick()} >
                    Logout
                </button>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        );
    }
}

export default Home;
