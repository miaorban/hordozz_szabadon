import Stripe from 'stripe';
import { NextResponse } from 'next/server'
import { headers } from "next/headers";
import FitcheckService from '@/app/utils/FitcheckService';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(req) {
  const sig = (await headers()).get('stripe-signature');
  const body = await req.text();
  
  let event;
  try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
      console.error('Error verifying webhook signature:', err);
      return NextResponse.json({ message: 'Webhook Error: ' + err.message }, { status: 400 });
  }
  // Handle the event
  switch (event.type) {
      case 'checkout.session.completed':
        const checkoutSession = event.data.object;
        console.log('fitcheck_id', checkoutSession.client_reference_id);
        console.log('country', checkoutSession.customer_details.address.country);
        console.log('city', checkoutSession.customer_details.address.city);
        console.log('state', checkoutSession.customer_details.address.state);
        console.log('zip', checkoutSession.customer_details.address.postal_code);
        console.log('line1', checkoutSession.customer_details.address.line1);
        console.log('line2', checkoutSession.customer_details.address.line2);
        console.log('email', checkoutSession.customer_details.email);
        const res = await new FitcheckService().saveBillingAddress(checkoutSession.client_reference_id, {
          country: checkoutSession.customer_details.address.country,
          city: checkoutSession.customer_details.address.city,
          zip: checkoutSession.customer_details.address.postal_code,
          address: `${checkoutSession.customer_details.address.line1} ${checkoutSession.customer_details.address.line2}`
        });
        console.log('res', res);
      break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
  }
  return NextResponse.json({ received: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};