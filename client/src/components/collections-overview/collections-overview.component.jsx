import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../preview-collection/collection-preview.component';

export const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);

// *** STYLES ***

const CollectionsOverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`;