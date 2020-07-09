import React, { Component } from 'react'
import axios from 'axios'


export class home extends Component {
   state ={
       name: ""
   }

    componentDidMount () {
        axios.get('http://localhost:5000/profile')
        .then(res => {
            console.log(res.data)
            this.setState({
                name:res.data
            })
       
        }).catch(err => {
            console.log(err)
            window.location.href = '/login'
        }) 
    }
    handleLogout = () => {
        localStorage.removeItem('t1');
        window.location.href = '/login'
    }


    render() {
        return (
            <div>
                <h1>Home {this.state.name}</h1>
                <input type="button" value="Logout" onClick={this.handleLogout}/>
             
            </div>
        )
    }
}

export default home
