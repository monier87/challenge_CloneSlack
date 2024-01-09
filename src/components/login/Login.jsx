import React from 'react'
import "./Login.css"
import {Button} from "@mui/material"
import {auth , provider} from "../../firebase"
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

function Login() {
const [state, dispatch] = useStateValue();
const signIn = () => {
    auth 
    .signInWithPopup(provider)
    .then((result) => {console.log(result);
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        })
    })
   
    .catch((error) => {alert(error.message)})
}



  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://th.bing.com/th/id/R.30d4081a44330f2f53da759391cd714d?rik=F%2bfAtWl3AiIP9w&pid=ImgRaw&r=0' alt=''/>

            <h1>Sign in to Slack</h1>
            <p>A decision worth considering</p>
            <Button onClick = {signIn}>Sign in with Google</Button>
        </div>
    </div>
  )
}

export default Login