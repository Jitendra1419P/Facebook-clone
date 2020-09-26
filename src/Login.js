import {
    Button
} from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth,provider} from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        //sigh in...
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user)
            })
            .catch(error => alert(error.message));
    };
    return ( <div className = "login" >
        <div className = "login_logo" >
        <img className = "fb_logo"
        src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        alt = "bf-logo" / >
        <img className = "fb_font_logo"
        src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
        alt = "fb-font-logo" / >
        </div>  
        <Button type = "submit"
        onClick = {signIn} >
        Sign In 
        </Button>            
        </div >
    )
}

export default Login