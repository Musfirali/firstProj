import React from "react";
import { useState, type SyntheticEvent } from "react"


class LoginClass extends React.Component{
    state={
        email: "",
        password: ""
    };

    submitted = (ev: SyntheticEvent) => {
        ev.preventDefault;
       var target = ev.target as HTMLFormElement
        console.log(target,this.state)
    }

    render(): React.ReactNode{
        return(
        <form className="flex flex-col gap-8" onSubmit={this.submitted.bind(this)}>
            <h1>Login Form</h1>
            <input 
            type="email" 
            placeholder="Email" 
            onChange={(ev)=>{
                this.setState({
                    email: ev.target.value,
                })
            }}
            className="border-2">
            </input>

            <input 
            onChange={(ev)=>{
                this.setState({
                    password: ev.target.value,
                })
            }}
            type="password" 
            placeholder="Password" 
            className="border-2">
            </input>
            <button>submit</button>
        </form>
    );
}
}

export default LoginClass