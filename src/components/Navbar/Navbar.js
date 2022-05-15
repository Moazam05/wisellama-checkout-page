import React from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/images/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className='bg-white drop-shadow-md'>
        <div className='container mx-auto py-4'>
          <div className='flex justify-between items-center'>
            <div>
              <Link to="/">
              <img src={logo} alt='branding' />
              </Link>
            </div>
            <div>
              <Link to='/' className='text-login text-xl'>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
