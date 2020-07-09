import React, { Component } from 'react'
import axios from 'axios'
let token;
const style ={
    login:{
        display:"flex",
        color:"red"
    }
}
export class login extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('http://localhost:5000/login',data)
        .then((res) => {
            token = res.data;
            return token
        }).then((token)=> {
            axios.defaults.headers.common['Authorization'] = token.token;
            localStorage.setItem('t1',token.token)
            window.location.href = '/';
        }).catch(err => console.log(err))
    }
    render() {
        return (
            <div className={style.login}>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} action='/'>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} required/>
                    <input type="password" name="password" id="password" value={this.state.password}  onChange={this.handleChange} required/>
                    <input type="submit" value="Submit"/>
                </form >
            </div>
        )
    }
}

export default login
