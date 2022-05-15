import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { askQuestion } from "../../Redux/CheckoutReducer";
import TextField from "../Shared/TextField";

const AskQuestion = (props) => {
  const { nextHandler } = props;

  const dispatch = useDispatch();
  const questionInfo = useSelector((state) => state.checkout.valueTwo);

  const [questionValue, setQuestionValue] = useState(questionInfo);

  const questionHanlder = (e) => {
    setQuestionValue(e.target.value);
  };

  const sendHandler = () => {
    dispatch(askQuestion(questionValue));
    nextHandler();
  };

  const style = {
    height: "455px",
  };

  return (
    <div
      className="p-6 mx-auto bg-white rounded-b-2xl -mt-3 shadow-lg overflow-auto h-4/5 xl:h-4/5"
      style={style}
    >
      <div className="flex items-center justify-center">
        <div className="text-3xl font-semibold text-black mb-8 mt-3">
          Ask Alex a question
        </div>
      </div>
      <div className="my-20 mx-14 question-field">
        <TextField value={questionValue} onChange={questionHanlder} />

        <div className="flex items-center justify-center mt-8">
          <button
            onClick={sendHandler}
            className="bg-themeButton text-black font-semibold py-2 px-10 rounded-full shadow-lg cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
