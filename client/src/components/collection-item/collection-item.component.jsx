import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from './../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer className='name'>{name}</NameContainer>
                <PriceContainer className='preice'>{price}</PriceContainer>
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
`;

const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

const PriceContainer = styled.span`
    width: 10%;
    text-align: right;
`;