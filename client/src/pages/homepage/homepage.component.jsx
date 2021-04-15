import React from 'react';
import styled from 'styled-components';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
    return (
        <HomeContainer>
            <Directory />
        </HomeContainer>
    );
};

export default HomePage;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
