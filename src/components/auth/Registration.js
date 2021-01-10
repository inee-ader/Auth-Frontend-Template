import React, { Component } from 'react';
import axios from 'axios'

class Registration extends Component {

    state = {
        email: "", 
        password: "", 
        password_confirmation: "", 
        registrationErrors: ""
    }
    
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const {email, password, password_confirmation} = this.state

        axios
        .post('http://localhost:3001/registrations', {
            user:{
                email: email, 
                password: password, 
                password_confirmation: password_confirmation
            }
        }, 
        { withCredentials: true } // very important
        )
        .then(response => {
            console.log('regisration response', response)
        })
        .catch(error => {
            console.log('registration error', error)
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Registration goes here</h1>
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
                <input 
                    type="password" 
                    name="password_confirmation" 
                    placeholder="Confirm Password" 
                    value={this.state.password_confirmation}onChange={this.handleChange}
                    required 
                />
                <button type="submit" >Register</button>
                </form>
            </div>
        );
    }
}

export default Registration;
