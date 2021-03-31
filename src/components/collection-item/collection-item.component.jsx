import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from './../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { id, imageUrl, name, price } = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='preice'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispach) => ({
    addItem: (item) => dispach(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
