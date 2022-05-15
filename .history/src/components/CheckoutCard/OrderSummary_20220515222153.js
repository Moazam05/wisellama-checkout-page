import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { summary } from '../../Redux/CheckoutReducer';
import GreenCheckbox from '../Shared/GreenCheckbox/GreenCheckbox';

const OrderSummary = (props) => {
  const { nextHandler } = props;

  const dispatch = useDispatch();

  const [check, setCheck] = useState(
    useSelector((state) => state.checkout.valueFour) ?? ''
  );

  const checkBox = (event) => {
    setCheck(event.target.checked);
  };

  const summaryHandler = () => {
    dispatch(summary(check));
    nextHandler();
  };

  const style = {
    height: '425px',
  };
  return (
    <div
      className='py-6 px-28 mx-auto bg-white rounded-b-2xl -mt-3 shadow-lg h-4/5 xl:h-3/4 xl:px-16 sm:px-8'
      style={style}
    >
      <div className='flex items-center justify-center flex-col'>
        <div className='text-4xl font-semibold text-black mt-4 xl:mt-3'>
          Order summary
        </div>
        <div className='mt-3 text-base text-textColor xl:mt-2'>
          5 min. call with Alex Hindell
        </div>
      </div>
      <div className='px-8'>
        <div className='flex justify-between mt-12 xl:mt-10'>
          <div className='text-black text-lg font-normal'>Subtotal</div>
          <div className='text-black text-lg font-bold'>$35.00</div>
        </div>
        <div className='flex justify-between mt-1'>
          <div className='text-black text-lg font-normal'>Tax</div>
          <div className='text-black text-lg font-bold'>$5.00</div>
        </div>
        <div className='flex justify-between mt-1'>
          <div className='text-black text-lg font-normal'>Holler fee</div>
          <div className='text-black text-lg font-bold'>$5.00</div>
        </div>
        <div className='mt-6 mb-3 border-b-2 border-themeChip'></div>
        <div className='flex justify-between items-center'>
          <div className='text-black text-lg'>Do you have access to iPhone</div>
          <div>
            <GreenCheckbox value={check} onChange={checkBox} />
          </div>
        </div>

        <div className='flex justify-between mt-7 mb-6 xl:mt-10'>
          <div className='text-black text-3xl font-medium'>$45.00</div>
          <button
            disabled={check === '' || check === false}
            onClick={summaryHandler}
            className='bg-themeButton text-black shadow-lg text-xl font-medium rounded-full py-2 px-8'
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
