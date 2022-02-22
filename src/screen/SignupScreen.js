import React, { useRef } from 'react'
import { signup } from '../firebase'
import './SignupScreen.css'

function SignupScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = async (e) => {
        e.preventDefault()
        await signup(emailRef.current.value, passwordRef.current.value).then((authuser) => {
            console.log(authuser);
        }).catch(error => alert(error.message))
    }

    return (
        <div className='signup'>
            <form>
                <h2 style={{ textAlign: 'left' }}>Create Account</h2>
                <input ref={emailRef} className='email' type="email" placeholder='Email address' />
                <input ref={passwordRef} className='email' type="password" placeholder='Password' />
                <button onClick={register} className='btn-primary' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupScreen