import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineArrowLeft } from "react-icons/ai";

import CheckoutCard from "../components/CheckoutCard/CheckoutCard";
import ChooseTopic from "../components/CheckoutCard/ChooseTopic";
import AskQuestion from "../components/CheckoutCard/AskQuestion";
import Offer from "../components/CheckoutCard/Offer";
import CreateAccount from "../components/CheckoutCard/CreateAccount";
import OrderSummary from "../components/CheckoutCard/OrderSummary";
import Pay from "../components/CheckoutCard/Pay";
import ThankYou from "../components/CheckoutCard/ThankYou";

const sliderColor = [
  {
    id: 0,
    color: "#F5C60A",
    secondColor: "#F5C60A",
  },
  {
    id: 1,
    color: "#F5C60A",
    secondColor: "#fff",
  },
  {
    id: 2,
    color: "#F5C60A",
    secondColor: "#fff",
  },
  {
    id: 3,
    color: "#F5C60A",
    secondColor: "#fff",
  },
  {
    id: 4,
    color: "#F5C60A",
    secondColor: "#fff",
  },
  {
    id: 5,
    color: "#F5C60A",
    secondColor: "#fff",
  },
];

const CheckoutPage = () => {
  const [page, setPage] = useState(0);

  const nextHandler = () => {
    setPage(page + 1);
  };

  const prevHandler = () => {
    setPage(page - 1);
  };

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <ChooseTopic nextHandler={nextHandler} />;
      case 1:
        return <AskQuestion nextHandler={nextHandler} />;
      case 2:
        return <Offer nextHandler={nextHandler} />;
      case 3:
        return <CreateAccount nextHandler={nextHandler} />;
      case 4:
        return <OrderSummary nextHandler={nextHandler} page={page} />;
      case 5:
        return <Pay />;
      case 6:
        return <ThankYou />;
      default:
        return <ChooseTopic />;
    }
  };

  return (
    <React.Fragment>
      <div className='bg-[url("/public/images/background.png")] w-full min-h-screen bg-no-repeat bg-cover bg-center'>
        <div className="container mx-auto">
          <div className="p-8">
            {/* Page # 5 Show */}
            {page === 5 ? (
              <Pay nextHandler={nextHandler} prevHandler={prevHandler} />
            ) : (
              <div className="grid grid-cols-6 gap-6 h-full">
                <div className="col-span-2 md:col-span-6 sm:col-span-6">
                  <button onClick={prevHandler} disabled={page === 0}>
                    <AiOutlineArrowLeft
                      size={35}
                      className="bg-white rounded-full p-2 cursor-pointer shadow-lg"
                    />
                  </button>
                  <div
                    className="max-w-sm ml-10 shadow-lg rounded-3xl xl:h-80 2xl:h-96"
                    style={{ height: "320px", widht: "300px" }}
                  >
                    <img
                      className="mx-auto block rounded-3xl h-full"
                      src="https://www.w3schools.com/bootstrap4/paris.jpg"
                      alt="branding"
                    />
                  </div>
                  <div className="mt-8">
                    <div
                      className="p-6 max-w-sm ml-10 bg-white rounded-3xl flex items-center space-x-4"
                      style={{ height: "170px", widht: "300px" }}
                    >
                      <div>
                        <div className="text-3xl font-bold text-themeHeading">
                          Alex Hindell
                        </div>
                        <div className="text-xl font-semibold text-themeHeading">
                          @alexhindell
                        </div>
                        <p className="text-themeHeading mt-1">
                          Baker, content creator, mum
                        </p>
                        <p className="text-themeHeading flex items-center">
                          <GoLocation className="mr-1" /> LA, California
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-6 sm:col-span-6 h-full">
                  {/* Last Page Show */}
                  {page === 6 ? (
                    <ThankYou />
                  ) : (
                    <>
                      <div className="mb-4 mt-3">
                        <div className="flex">
                          {sliderColor.map((slider, index) => {
                            const { id, color, secondColor } = slider;
                            return (
                              <div key={index}>
                                <div className="w-20 rounded-full h-2.5 ml-1 sm:w-16">
                                  <div
                                    style={{
                                      background:
                                        page === id
                                          ? `${color}`
                                          : page > id
                                          ? `${color}`
                                          : `${secondColor}`,
                                    }}
                                    className="h-1.5 rounded-full"
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="h-full">
                        <CheckoutCard pageDisplay={pageDisplay} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckoutPage;
