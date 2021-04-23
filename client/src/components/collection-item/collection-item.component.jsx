import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from './../../redux/cart/cart.actions';

export const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer className='name'>{name}</NameContainer>
                <PriceContainer className='preice'>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = (dispach) => ({
    addItem: (item) => dispach(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

// ***STYLES ***

const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover {
        .image {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 40vw;
        &:hover {
            .image {
                opacity: unset;
            }
            button {
                opacity: unset;
            }
        }
    }
`;

const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        min-width: unset;
        opacity: 0.9;
        padding: 0 10px;
    }
`;

AddButton.displayName = 'AddButton';

const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImage.displayName = 'BackgroundImage';

const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

CollectionFooterContainer.displayName = 'CollectionFooterContainer';

const NameContainer = styled.span`
    margin-bottom: 15px;
`;

NameContainer.displayName = 'NameContainer';

const PriceContainer = styled.span`
    margin-left: 5px;
    text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';
