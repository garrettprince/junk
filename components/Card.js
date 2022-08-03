import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

function Card({ title, description, category, dueDate, duration, urgent }) {
  return (
    <div
      id="card1"
      className="bg-green-500/10 h-max w-[19rem] border-green-500 rounded-2xl border-[6px] cursor-grab m-4"
      //   style
    >
      <header className="flex justify-between items-center mx-4 mt-3">
        <h1 className="font-bold text-xl">{title}</h1>
        {/* {urgent && (
          <button className="h-4 w-4 rounded-full bg-red-500 text-transparent text-xs font-extrabold px-[.35rem] py-0 hover:text-white hover:w-20 transition-all">
            URGENT
          </button>
        )} */}
      </header>
      <section
        id="text-container"
        className="flex items-center my-3 mx-4 justify-between"
      >
        <div id="description-text">
          <p className="leading-[1.35rem] font-regular">{description}</p>
        </div>
        <div className="flex-col ml-3 mr-1 leading-4">
          <h2 className="flex text-sm font-extrabold text-green-500 justify-center">
            {duration}
          </h2>
          <h2 className="flex text-xs font-extrabold text-green-500">MIN</h2>
        </div>
      </section>
      <footer className="flex justify-between mx-4 mt-4 mb-1 content-center">
        <h2 className="text-sm font-extrabold text-green-500">
          {category.toUpperCase()}
        </h2>
        <h2 className="text-sm font-extrabold text-green-500">
          {`DUE ` + dueDate.toUpperCase()}
        </h2>
        <DotsHorizontalIcon className="h-6 w-6 cursor-pointer text-green-500" />
      </footer>
    </div>
  );
}

export default Card;
