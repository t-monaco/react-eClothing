import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_CUvN2xtlV0IXxPTfN97nEGeU00usadxTo1';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successfully');
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

export default StripeCheckoutButton;
