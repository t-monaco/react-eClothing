import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from './../../assets/shopping-bag.svg';

import { toggleCartHidden } from './../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// *** STYLES ***

const CartContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

CartContainer.displayName = 'CartContainer';

const ShoppingIcon = styled(ShoppingIconSVG)`
    width: 24px;
    height: 24px;
`;

const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;

ItemCountContainer.displayName = 'ItemCountContainer';
