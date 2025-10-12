import { useState, type SyntheticEvent } from "react"


export const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setpassword] = useState('');

   const submitted = (ev: SyntheticEvent) => {
        ev.preventDefault;
       var target = ev.target as HTMLFormElement
        console.log(target, {email,password})
    }

    return (
        <form className="flex flex-col gap-8" onSubmit={submitted}>
            <h1>Login Form</h1>
            <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(ev)=> { setEmail(ev.target.value); }}
            className="border-2">
            </input>
            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(ev)=>{ setpassword(ev.target.value) }}
            className="border-2"></input>
            <button>submit</button>
        </form>
    )
}

export default Login