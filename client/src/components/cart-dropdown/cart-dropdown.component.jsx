import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import CustomButton from './../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

export const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageContainer>
                    Your cart is empty
                </EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CartDropdownButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// *** STYLES ***

const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;

const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;

CartDropdownButton.displayName = 'CartDropdownButton';

const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

EmptyMessageContainer.displayName = 'EmptyMessageContainer';

const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */

        &::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
    }
`;