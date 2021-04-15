import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <CollectionPageContainer>
            <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
            <CollectionItemContainer>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

// *** STYLES ***

const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CollectionTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

const CollectionItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
        margin-bottom: 50px;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;
