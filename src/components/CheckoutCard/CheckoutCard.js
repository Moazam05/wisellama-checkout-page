import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineClockCircle } from "react-icons/ai";

const CheckoutCard = ({ pageDisplay }) => {
  const topicName = useSelector((state) => state.checkout.valueOne);
  const question = useSelector((state) => state.checkout.valueTwo);
  const offerValue = useSelector((state) => state.checkout.valueThree);
  const { status, price } = offerValue;

  return (
    <>
      <div className="px-6 pt-6 mt-5 pb-5 mx-auto bg-white rounded-2xl drop-shadow-md flex flex-col space-x-4">
        <div className="flex flex-wrap">
          <div className="bg-themeChip rounded-full py-1 pl-3 pr-4 flex items-center">
            <AiOutlineClockCircle className="mr-1" /> 5 min. call
          </div>
          {topicName === "" ? (
            <></>
          ) : (
            <div className="bg-themeChip rounded-full py-1 pl-3 pr-4 ml-4 flex items-center">
              {topicName}
            </div>
          )}

          {status === false ? (
            <></>
          ) : (
            <div className="bg-themeChip rounded-full py-1 pl-3 pr-4 ml-4 flex items-center">
              ${price}
            </div>
          )}
        </div>

        {question === "" ? (
          <></>
        ) : (
          <div className="text-sm mt-2">{`"${question}"`}</div>
        )}
      </div>
      {pageDisplay()}
    </>
  );
};

export default CheckoutCard;
