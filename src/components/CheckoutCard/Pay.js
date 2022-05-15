import React from "react";
import { AiOutlineArrowLeft, AiFillApple } from "react-icons/ai";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../StripePayment/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Pay = (props) => {
  const { prevHandler, nextHandler } = props;

  return (
    <div className="w-full pl-6 mx-auto bg-white rounded-2xl mt-2 shadow-lg h-full sm:pl-0 md:pl-0">
      <div className="flex justify-center pl-5 sm:flex-col md:flex-col sm:pl-1 md:pl-0">
        <div className="w-1/2 pt-16 pb-12 sm:w-full md:w-full sm:ml-4 md:ml-6">
          <div className="w-16 h-16">
            <img
              className="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/api/portraits/women/81.jpg"
              alt="user"
            />
          </div>
          <button onClick={prevHandler} className="flex flex-col">
            <div className="flex items-center">
              <AiOutlineArrowLeft
                size={30}
                className="rounded-full pt-2 cursor-pointer"
              />
              <span className="pt-2 text-login">Back</span>
            </div>
          </button>
          <div className="text-secondary ml-8 sm:ml-3 md:ml-3">
            Alex Hindell
          </div>

          <div className="mt-5 ml-8 text-themeHeading text-xl sm:ml-3 md:ml-3">
            5 min. call with Alex Hindell
          </div>

          <div className="mt-2 ml-8 text-themeHeading text-3xl font-medium sm:ml-3 md:ml-3">
            $ 45.00
          </div>

          <div className="max-w-sm ml-8 mt-5 rounded-3xl xl:h-80 2xl:h-96 sm:ml-3 md:ml-3">
            <img
              className="mx-auto block rounded-3xl h-full"
              src="https://www.w3schools.com/bootstrap4/paris.jpg"
              alt="ChitChat Logo"
            />
          </div>
          <div className="flex text-secondary ml-8 mt-12 cursor-pointer sm:ml-3">
            <div>
              Powered by <span className="font-bold pr-5">stripe</span>
            </div>
            <div className="border-x"></div>
            <div className="px-5">Term</div>
            <div>Privacy</div>
          </div>
        </div>
        {/* Pay with apple */}
        <div className="w-1/2 sm:w-full md:w-full">
          <div className="px-6 mx-auto bg-white rounded-2xl shadow-lg h-full sm:px-0">
            <div className="p-20">
              <button className="rounded bg-black text-white w-full py-1 font-medium flex justify-center items-center">
                <span>
                  <AiFillApple />
                </span>
                Pay
              </button>
              <div className="my-6 flex justify-between items-center text-secondary ">
                <div className="border-y border-2 w-1/3"></div>
                <div
                  className="text-sm px-1 flex justify-center items-center"
                  style={{ width: "130px" }}
                >
                  Or pay with card
                </div>
                <div className="border-y border-2 w-1/3"></div>
              </div>

              {/* stripe */}

              <Elements stripe={stripePromise}>
                <CheckoutForm nextHandler={nextHandler} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
