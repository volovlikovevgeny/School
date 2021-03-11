import React, { ReactElement } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const StripeButton = (): ReactElement => {
    const handleClick = async (event) => {
        const stripe = await stripePromise;

        console.log(stripe);
        // Call your backend to create the Checkout Session
        const response = await fetch('/api/stripe/session', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: 1 }),
        });

        const session = await response.json();

        console.log(session);

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        console.log(result);

    };

    return (
        <button onClick={handleClick}>
            Pay
        </button>
    );
};

export default StripeButton;
