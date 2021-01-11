import React, { Component } from 'react';
import Login from './auth/Login';
import Registration from './auth/Registration'

class Home extends Component {

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div>
                <h1> HOME </h1>
                <h1> Status: {this.props.loggedInStatus} </h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        );
    }
}

export default Home;
