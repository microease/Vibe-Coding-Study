"use client";
import React from "react";

const FAQsListItem = ({ qa }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <li key={qa.question}>
      {/* Question */}
      <button
        className="py-5 font-semibold border-b w-full text-left flex items-center justify-between"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{qa.question}</p>
        {isOpen ? "-" : "+"}
      </button>
      {/* Answer */}
      {isOpen ? <div>{qa.answer}</div> : <></>}
      <div className={`${isOpen ? "block" : "hidden"} mt-3 mb-6 opacity-90`}>
        {qa.answer}
      </div>
    </li>
  );
};
export default FAQsListItem;
