import React, { useRef, useState } from 'react'
import { signin } from '../firebase'
import './SigninScreen.css'
import SignupScreen from './SignupScreen'
import LoadingBar from 'react-top-loading-bar'

function SigninScreen(props) {
    const [signUp, setSignUp] = useState(false)
    const [blank, setBlank] = useState('')
    const [input, setinput] = useState('')
    const [progress, setProgress] = useState(0);

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signIn = async (e) => {
        e.preventDefault()
        props.progress(20);
        await signin(emailRef.current.value, passwordRef.current.value).then((authuser) => {
            console.log(authuser);
        }).catch(error => alert(error.message))
        props.progress(100);
    }

    const onLoad = (progress) => {
        setProgress(progress);
    }

    return (
        <div className='signinscreen'>
            <LoadingBar progress={progress} onLoaderFinished={() => setProgress(0)}
      />
            {signUp ? (
                <SignupScreen progress={onLoad}/>
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