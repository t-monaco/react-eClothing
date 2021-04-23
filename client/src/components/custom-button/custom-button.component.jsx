import React from 'react';

import styled, { css } from 'styled-components';
import googleIcon from './../../assets/google.svg';

export const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #82b0fd;
    color: white;
    position: relative;
    padding-right: 52px;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    &::after {
        content: '';
        position: absolute;
        background: url(${googleIcon}) no-repeat;
        background-position: center;
        width: 30px;
        height: 100%;
        right: 12px;
        top: 0;
    }
`;

const getButtonStyles = ({ inverted, isGoogleSignIn }) => {
    if (isGoogleSignIn) {
        return googleSignInStyles;
    }

    return inverted ? invertedButtonStyles : buttonStyles;
};

const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;
