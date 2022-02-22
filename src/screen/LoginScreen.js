import React, { useState } from 'react'
import SigninScreen from './SigninScreen'
import './LoginScreen.css'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    const [hide, setHide] = useState(false)

    return (
        <div className='loginscreen'>
            <div className="loginscreen-background">
                <img onClick={()=> {setSignIn(false)
                setHide(false)}} className="nav-logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix" />
                {!hide ? (<button style={{cursor: 'pointer'}} onClick={() => {
                    setSignIn(true)
                    setHide(true)
                }} className='sign-in'>Sign In</button>) : null}

            </div>
            <div className='login-gradient' />
            <div className="login-body">
                {signIn ? (
                    <SigninScreen />
                ) : (
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <div className="login-input">
                            <form>
                                <button onClick={() => {
                                    setSignIn(true)
                                    setHide(true)
                                }} className='input-button'>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen