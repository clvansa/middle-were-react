import React, { Component } from "react";
import axios from "axios";
let token;
const style = {
  error: {
    backgroundColor: "red",
    padding: 20,
    color: "#fff",
    borderRadius: 20,
  },
  container: {
    maxWidth: "300px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "30px auto",
    border: "2px solid #eee",
    padding: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  input: {
    padding: 10,
    margin: 10,
    fontSize: "1.2rem",
    outlineColor: "red",
  },
  btn: {
    display: "block",
    padding: "10px",
    color: "red",
    width: "100px",
  },
};

export class login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let data = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        token = res.data;
        return token;
      })
      .then((token) => {
        axios.defaults.headers.common["Authorization"] = token.token;
        localStorage.setItem("t1", token.token);
        window.location.href = "/";
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error,
        });
      });
  };
  render() {
    return (
      <div style={style.container}>
        <h1 style={{ color: "red" }}>Login</h1>
        {this.state.error ? (
          <p style={style.error}>{this.state.error}</p>
        ) : null}
        <p></p>
        <form onSubmit={this.handleSubmit} action="/" style={style.form}>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
            style={style.input}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            style={style.input}
          />
          <input type="submit" value="Submit" style={style.btn} />
        </form>
      </div>
    );
  }
}

export default login;
