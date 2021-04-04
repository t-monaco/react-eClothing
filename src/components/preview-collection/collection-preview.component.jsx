import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer
                onClick={() => history.push(`${match.path}/${routeName}`)}
                className='title'
            >
                {title.toUpperCase()}
            </TitleContainer>
            <PreviewContainer>
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
};

export default withRouter(CollectionPreview);

// *** STYLES ***

const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`;

const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
