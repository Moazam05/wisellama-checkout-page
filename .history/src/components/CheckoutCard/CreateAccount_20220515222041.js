import React, { useState } from 'react';
import { AiOutlineGoogle, AiFillApple, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const buttonList = [
  {
    name: 'Facebook',
    image: <BsFacebook />,
    id: 1,
  },
  {
    name: 'Google',
    image: <AiOutlineGoogle />,
    id: 2,
  },
  {
    name: 'Apple',
    image: <AiFillApple />,
    id: 3,
  },
  {
    name: 'Twitter',
    image: <AiOutlineTwitter />,
    id: 4,
  },
];

const CreateAccount = (props) => {
  const { nextHandler } = props;

  const [value, setValue] = useState('');

  const buttonHandler = async (e) => {
    setValue(e);
    nextHandler();
  };

  const style = {
    height: '425px',
  };

  return (
    <div
      className='py-6 px-28 mx-auto bg-white rounded-b-2xl -mt-3 shadow-lg h-4/5 xl:h-3/4 sm:px-5'
      style={style}
    >
      <div className='flex items-center justify-center flex-col'>
        <div className='text-4xl font-semibold text-black mt-3'>
          Create account
        </div>

        <div className='mt-8 xl:mt-7'>
          {buttonList.map((buttonName, index) => {
            const { name, image } = buttonName;
            return (
              <button
                key={index}
                onClick={() => buttonHandler(name)}
                className={
                  value === name
                    ? 'bg-themeButton font-semibold text-black rounded-full flex items-center justify-center w-64 py-3 my-4'
                    : 'bg-themeChip font-semibold text-black rounded-full flex items-center justify-center w-64 py-3 my-4'
                }
              >
                <span className='mr-2'>{image}</span>
                {name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
