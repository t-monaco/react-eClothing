import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import CollectionItem from '../collection-item/collection-item.component';

export const CollectionPreview = ({
    title,
    items,
    history,
    match,
    routeName,
}) => {
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

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`;

TitleContainer.displayName = 'TitleContainer';

const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 14px;
    }
`;
