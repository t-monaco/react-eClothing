import React from 'react'
import styled from 'styled-components';

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignOut = () => {
    return (
        <SignInAndSignUpContainer className='sign-in-and-sign-out'>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    );
}

export default SignInAndSignOut

// *** STYLES ***

const SignInAndSignUpContainer = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: unset;
        align-items: center;
        > *:first-child {
            margin-bottom: 50px;
        }
    }
`;