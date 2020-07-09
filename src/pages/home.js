import React, { Component } from 'react'
import axios from 'axios'


export class home extends Component {
   

    componentDidMount () {
        axios.get('http://localhost:5000/profile')
        .then(res => {
            console.log(res.data)
       
        }).catch(err => {console.log(err)}) 
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
             
            </div>
        )
    }
}

export default home
