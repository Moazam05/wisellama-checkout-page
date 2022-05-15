import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { offerValue } from '../../Redux/CheckoutReducer';
import Slider from '../Shared/Slider/Slider';

const Offer = (props) => {
  const { nextHandler } = props;
  const dispatch = useDispatch();

  const [money, setMoney] = useState(
    useSelector((state) => state.checkout.valueThree.price) ?? ''
  );

  const [showMoney, setShowMoney] = useState('');

  let data = {
    price: money,
    status: showMoney,
  };

  const offerHandler = async () => {
    setShowMoney(true);
    dispatch(offerValue(data));
    nextHandler();
  };

  const style = {
    height: '425px',
  };

  return (
    <>
      <div
        className='py-6 px-28 mx-auto bg-white rounded-b-2xl -mt-3 shadow-lg h-4/5 xl:px-16 xl:h-3/4 sm:px-3'
        style={style}
      >
        <div className='flex items-center justify-center flex-col'>
          <div className='text-3xl font-semibold text-black mt-3'>
            Your offer for 5 min. talk
          </div>
          <div className='mt-3 text-lg text-textColor'>
            Alex usually accepts these ranges
          </div>
        </div>
        <div className='mt-16'>
          <Slider value={money} setMoney={setMoney} />
        </div>
        <div className='text-lg text-black flex items-center justify-center font-bold'>
          $50 or more <span className='font-normal ml-1'> is recommend! </span>
        </div>

        <div className='mt-10 flex items-center justify-center'>
          <button
            onClick={offerHandler}
            className='text-xl text-black font-bold rounded-full px-16 py-2 border-themeButton border-2'
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Offer;
