import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {

    state = {
        email: "", 
        password: "", 
        password_confirmation: "", 
        loginErrors: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const {email, password, password_confirmation} = this.state

        axios
            .post('http://localhost:3001/sessions', {
                user:{
                    email: email, 
                    password: password
                }
        }, 
        { withCredentials: true } // very important
        )
        .then(response => {
            console.log("response from login", response)
            if(response.data.logged_in){
                this.props.handleSuccessfulAuth(response.data)
            }
        })
        .catch(error => {
            console.log('login error', error)
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="email@example.com" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required 
                />
                <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;