import { SyntheticEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const LoginForm = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('')

  const submitForm = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, {
      email,
      password,
    });
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={submitForm}>
      <TextField
        id="outlined-basic"
        label="Email"
        placeholder="Enter your email"
        variant="outlined"
        onChange={(env)=>{
          setEmail(env.target.value)
        }}
      />
      <TextField
        type="password"
        label="Password"
        placeholder="Enter your password"
        variant="outlined"
        onChange={(env)=>{
          setPassword(env.target.value)
        }}
      />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
};
