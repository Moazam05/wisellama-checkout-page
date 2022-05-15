import React from "react";

import logo from "../../Assets/images/logo.svg";
import android from "../../Assets/images/playstore.png";
import apple from "../../Assets/images/appstore.png";

const ThankYou = () => {
  const style = {
    width: "520px",
    float: "left",
    height: "520px",
    overFlow: "auto",
  };
  return (
    <div
      className="pl-3 py-3 pr-6 mt-10 mx-auto bg-white rounded-2xl shadow-l"
      style={style}
    >
      <div className='bg-[url("/public/images/me.png")] w-full bg-no-repeat bg-cover bg-center'>
        <div className="px-12 pt-12 flex flex-col justify-center items-center">
          <img src={logo} alt="branding" />
          <div className="font-medium text-black text-xl text-center my-10">
            Install and sign in with your Google account inside Holler mobile
            app to be able to talk.
          </div>
          <div className="flex mb-48">
            <a
              href="https://www.google.com.pk/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={android} alt="android" width={160} className="mr-2" />
            </a>
            <a
              href="https://www.google.com.pk/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={apple} alt="apple" width={160} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
