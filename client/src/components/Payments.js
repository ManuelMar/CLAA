import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount="1000"
        currency="USD"
        name="CLAA"
        description="Cornell Latino Alumni Association"
        img="https://www.engineering.cornell.edu/images/project/cuseal_full_red.png"
        token={console.log('handle token')}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn blue">Donate</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
