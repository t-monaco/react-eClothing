import React, { Component } from 'react';
import styled from 'styled-components';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // process error
        return { hasErrored: true };
    }
    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
                    <ErrorImageText>Upps. Something went wrong.</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

// *** STYLES ***

const ErrorImageOverlay = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ErrorImageContainer = styled.div`
    display: inline-block;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    width: 40vh;
    height: 40vh;
`;

const ErrorImageText = styled.h2`
    font-size: 28px;
    color: #ed8527;
`;
