import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';
import {
    updateCartAfterCheckoutSuccess,
} from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({
    price,
    updateCartAfterCheckoutSuccess,
}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_CUvN2xtlV0IXxPTfN97nEGeU00usadxTo1';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then((response) => {
                alert('Payment Successful');
                updateCartAfterCheckoutSuccess();
            })
            .catch((error) => {
                console.log('Payment error', JSON.parse(error));
                alert(
                    'There was an issue with your payment. Please make sure you use the provided credit card.'
                );
            });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='GBross Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateCartAfterCheckoutSuccess: () =>
        dispatch(updateCartAfterCheckoutSuccess()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
