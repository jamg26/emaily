import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          token={token => this.props.handleStripeToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          amount={500}
          currency='USD'
          name='Emaily'
          description='Collect feedback from users.'
        >
          <Button style={{ color: 'white' }} type='link' size='large'>
            Add Funds
          </Button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);
