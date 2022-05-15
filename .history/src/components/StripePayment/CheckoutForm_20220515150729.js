import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';

import Country from '../Shared/Country/Country';
import InputField from '../Shared/InputField';

const CheckoutForm = (props) => {
  const { nextHandler } = props;
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const nameOnCardHandler = (event) => {
    setNameOnCard(event.target.value);
  };

  const countryHandler = (value) => {
    setCountry(value);
  };

  const zipCodeHandler = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });
    const { error } = payload;
    if (error) {
      setErrorMessage(error.message);
    }
    console.log('[PaymentMethod]', payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-6'>
        <InputField label='Email' value={email} onChange={emailHandler} />
      </div>

      <div className='mb-6'>
        <label
          className='block text-secondary text-sm mb-2'
          htmlFor='card-number-element'
        >
          Card number
        </label>
        <div className='shadow rounded'>
          <CardNumberElement
            id='card-number-element'
            className=' appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline'
            onReady={() => {
              console.log('CardNumberElement [ready]');
            }}
            onChange={(event) => {
              console.log('CardNumberElement [change]', event);
            }}
            onBlur={() => {
              console.log('CardNumberElement [blur]');
            }}
            onFocus={() => {
              console.log('CardNumberElement [focus]');
            }}
          />
          <div className='flex'>
            <CardExpiryElement
              className=' appearance-none  rounded border-b border-t-0 border-r-2 border-l-2 w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline'
              onReady={() => {
                console.log('CardNumberElement [ready]');
              }}
              onChange={(event) => {
                console.log('CardNumberElement [change]', event);
              }}
              onBlur={() => {
                console.log('CardNumberElement [blur]');
              }}
              onFocus={() => {
                console.log('CardNumberElement [focus]');
              }}
            />
            <CardCvcElement
              className='appearance-none rounded border-b border-r-2 border-t-0 w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline'
              onReady={() => {
                console.log('CardNumberElement [ready]');
              }}
              onChange={(event) => {
                console.log('CardNumberElement [change]', event);
              }}
              onBlur={() => {
                console.log('CardNumberElement [blur]');
              }}
              onFocus={() => {
                console.log('CardNumberElement [focus]');
              }}
            />
          </div>
        </div>
        {errorMessage === null ? (
          ''
        ) : (
          <p className='text-red-500'>{errorMessage}</p>
        )}
      </div>

      <div className='mb-6'>
        <InputField
          label='Name on Card'
          value={nameOnCard}
          onChange={nameOnCardHandler}
        />
      </div>

      <div className='mb-6'>
        <label className='block text-secondary text-sm mb-2'>
          Country or region
        </label>
        <div className='shadow rounded'>
          <Country value={country} onChange={countryHandler} />
          <InputField label='Zip' value={zipCode} onChange={zipCodeHandler} />
        </div>
      </div>
      {errorMessage === null ||
      errorMessage === 'Your card number is incomplete.' ||
      errorMessage === "Your card's expiration date is incomplete." ? (
        // ||
        // errorMessage === "Your card's security code is incomplete."
        <button
          type='submit'
          disabled={!stripe}
          onClick={nextHandler}
          className='mt-7 rounded bg-themeYellow text-black w-full py-1 font-medium flex justify-center items-center'
        >
          $100.00
        </button>
      ) : (
        <button
          type='submit'
          onClick={nextHandler}
          className='mt-7 rounded bg-themeYellow text-black w-full py-1 font-medium flex justify-center items-center'
        >
          $100.00
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
