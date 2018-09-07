import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CheckoutForm extends Component {
  state = {
    billingName: '',
    billingAddress: '',
    shippingName: '',
    shippingAddress: ''
 };


handleChange = event => {
    // this.setState({ event.target.value })
    // console.log(this.state);
}

  render() {
    const {
      billingName,
      billingAddress,
      shippingName,
      shippingAddress
    } = this.state;
console.log(this.state.billingName);

    return(
      <div>
        <form>
          <label>Billing Address</label>
          <input
          name="name"
          type="text"
          placeholder="Name"
          defaultValue={billingName}
          onChange={event => this.setState({billingName: event.target.value})}
          />
          <input
          name="address"
          type="text" placeholder="Address" defaultValue={billingAddress} />
          <button>Submit</button>
        </form>
        <form onSubmit={this.handleChange}>
          <label>Shipping Address</label>
          <input name="name" type="text" placeholder="Name" defaultValue={shippingName} />
          <input name="address" type="text" placeholder="Address" defaultValue={shippingAddress} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};


export default CheckoutForm;
