import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import serializeForm from 'form-serialize';

class CheckoutForm extends Component {
  state = {
    billingName: '',
    billingAddress: '',
    shippingName: '',
    shippingAddress: '',
    shippingSameAsBilling: 'checked'
 };

handleSubmit = event => {
  event.preventDefault();

  const values = serializeForm(event.target, { hash: true});

  console.log(values);
}



  render() {
    const {
      billingName,
      billingAddress,
      shippingName,
      shippingAddress,
      shippingSameAsBilling
    } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
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
          type="text"
          placeholder="Address"
          defaultValue={billingAddress}
          onChange={event => this.setState({billingAddress: event.target.value})}
          />
          <button>Submit</button>
        </form>

        <form>
        <input
        name="shipcheck"
        type="checkbox"
        defaultChecked={shippingSameAsBilling}
        onClick={event => this.setState({shippingSameAsBilling: event.target.checked})}
        />
        <label>Same as billing</label>
          <label>Shipping Address</label>
          <input
          name="shipName"
          id="shipName"
          type="text"
          placeholder="Name"
          value={shippingSameAsBilling ? billingName : shippingName}
          onChange={event => this.setState({shippingName: event.target.value})}
          />
          <input
          name="shipAddress"
          id="shipAddress"
          type="text"
          placeholder="Address"
          value={shippingSameAsBilling ? billingAddress : shippingAddress}
          onChange={event => this.setState({shippingAddress: event.target.value})}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};


export default CheckoutForm;
