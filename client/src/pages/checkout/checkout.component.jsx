import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';

export const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map((item) => (
            <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <TotalContainer>
            <span className='total'>TOTAL: ${total}</span>
        </TotalContainer>
        <WarningContainer>
            <strong>*Please use the following credit card for payments*</strong>
            <br />
            4242 4242 4242 4242 - Exp: 01/
            {(new Date().getFullYear() + 1).toString().substr(-2)} - CVV 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

// *** STYLES ***

const CheckoutPageContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    button {
        margin-left: auto;
        margin-top: 50px;
    }
    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

const CheckoutHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%unset;
    &:last-child {
      width: 12%;
    }
  }
`;

const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

const WarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`;
