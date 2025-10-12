import { use, type FC } from "react"
import LoginClass from "./LoginClass"

type WelcomeProps={
    // isLoggedIn: boolean,
    user?: {
        uname: string,
        type: 'Admin' | 'Guest',
    }
}

const Welcome:FC<WelcomeProps> = ({user})=>{
    if(user?.uname && user?.type == 'Admin'){
        return <h2>Hi {user.uname}, Aceess granted <LoginClass></LoginClass></h2>
        
    }
    else if(user?.uname && user.type == 'Guest'){
        return <h2>Sorry {user.uname}, you're not authorized to login because you're a {user.type}</h2>
    }
    return(
        <h2>You've been blocked from Entering our site.</h2>
    )
}

export default Welcome