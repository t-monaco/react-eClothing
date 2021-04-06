import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmPassword) {
            alert(`password don't match`);
            return;
        }

        signUpStart({ email, password, displayName });
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an acocunt</SignUpTitle>
                <span>Sign up with your email & password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Name'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);

// *** STYLES ***

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

const SignUpTitle = styled.h2`
    margin: 10px 0;
`;
