import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { chooseTopic } from "../../Redux/CheckoutReducer";

const topicItem = [
  {
    name: "#question",
    id: 1,
    spaceTop: 14,
    spaceLeft: 14,
  },
  {
    name: "#selfie",
    id: 2,
    spaceRight: 14,
  },
  {
    name: "#business",
    id: 3,
    spaceTop: 14,
  },
  {
    name: "#poposition",
    id: 4,
  },
  {
    name: "#learning",
    id: 5,
    spaceTop: 14,
    spaceLeft: 43,
  },
  {
    name: "#fun",
    id: 6,
    spaceRight: 35,
  },
  {
    name: "#lifestyle",
    id: 7,
    spaceTop: 14,
    spaceLeft: 43,
  },
  {
    name: "#advice",
    id: 8,
    spaceRight: 14,
  },
];

const ChooseTopic = (props) => {
  const { nextHandler } = props;

  const dispatch = useDispatch();

  const [value, setValue] = useState(
    useSelector((state) => state.checkout.valueOne) ?? ""
  );

  const topicHandler = (e) => {
    setValue(e);
    dispatch(chooseTopic(e));
    nextHandler();
  };

  const style = {
    height: "455px",
  };
  return (
    <div
      className="p-6 mx-auto bg-white rounded-b-2xl -mt-3 shadow-lg float-left overflow-auto h-4/5 xl:h-4/5"
      style={style}
    >
      <div className="flex items-center justify-center">
        <div className="text-3xl font-semibold text-black mb-8">
          Choose a topic
        </div>
      </div>

      <div className="flex flex-wrap mx-32 mt-3 justify-between xl:mx-16 md:mx-30 sm:mx-8">
        {topicItem.map((topic, index) => {
          const { name, spaceTop, spaceLeft, spaceRight } = topic;

          return (
            <div
              key={index}
              onClick={() => topicHandler(name)}
              style={{
                marginTop: `${spaceTop}px`,
                marginLeft: `${spaceLeft}px`,
                marginRight: `${spaceRight}px`,
              }}
              className={
                value === name
                  ? "bg-themeButton rounded-full max-w-fit font-medium mb-3 py-2 px-8 cursor-pointer h-fit"
                  : "bg-themeChip font-medium rounded-full max-w-fit mb-3 py-2 px-8 cursor-pointer h-fit"
              }
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseTopic;
