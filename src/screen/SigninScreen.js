import React, { useRef, useState } from 'react'
import { signin } from '../firebase'
import './SigninScreen.css'
import SignupScreen from './SignupScreen'

function SigninScreen() {
    const [signUp, setSignUp] = useState(false)
    const [blank, setBlank] = useState('')
    const [input, setinput] = useState('')

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signIn = async (e) => {
        e.preventDefault()
        await signin(emailRef.current.value, passwordRef.current.value).then((authuser) => {
            console.log(authuser);
        }).catch(error => alert(error.message))
    }

    return (
        <div className='signinscreen'>
            {signUp ? (
                <SignupScreen />
            ) : (
                <form>
                    <h2 style={{ textAlign: 'left' }}>Sign In</h2>
                    <input value={blank} onChange={(e) => setBlank(e.target.value)} ref={emailRef} className='email' type="email" placeholder='Email or phone number' />
                    <input value={input} onChange={(e) => setinput(e.target.value)} ref={passwordRef} className='email' type="password" placeholder='Password' />
                    <button onClick={signIn} className='btn-primary' type='submit'>Sign In</button>
                    <input style={{ margin: 'unset' }} type="checkbox" value='true' />
                    <label style={{
                        marginTop: '-29px',
                        marginLeft: '-159px'
                    }} htmlFor="">Remember me</label>
                    <h3 style={{ textAlign: 'left' }}>
                        <span style={{ color: 'gray', fontSize: '1rem' }}>New to Netflix?</span>
                        <span onClick={() => setSignUp(true)} className='signup' style={{ marginLeft: '10px', cursor: 'pointer' }}>Sign Up Now</span>
                    </h3>
                </form>
            )}
        </div>
    )
}

export default SigninScreen