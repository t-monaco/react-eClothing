import React from 'react'

import './sing-in-sign-out.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignOut = () => {
    return (
        <div className='sign-in-and-sign-out'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignOut
