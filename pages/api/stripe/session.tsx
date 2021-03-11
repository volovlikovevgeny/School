import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const quantity = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                      currency: 'usd',
                      product_data: {
                        name: 'T-shirt',
                      },
                      unit_amount: 2000,
                    },
                    quantity: 1,
                  },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/`,
        });
        res.json({ id: session.id });
    } catch (err) {
        res.json({ err: err });
    }
};
