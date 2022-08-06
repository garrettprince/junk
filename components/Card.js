import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { categoryData } from "../utils/data";

function Card({
  title,
  description,
  category,
  dueDate,
  duration,
  urgent,
  style,
}) {
  return (
    <div
      className="bg-green-500/10 h-max w-[19rem] border-green-500 rounded-2xl border-[6px] cursor-grab m-4 transition-all hover:scale-[1.015] active:scale-100"
      style={style}
    >
      <header className="flex justify-between items-center mx-4 mt-3">
        <h1 className="font-semibold text-xl">{title}</h1>
        {urgent && (
          <button className="h-5 w-5 rounded-full bg-red-500 text-transparent text-xs font-extrabold px-[.35rem] py-0 hover:text-white hover:rounded-lg hover:w-20 transition-all">
            URGENT
          </button>
        )}
      </header>
      <section
        id="text-container"
        className="flex items-center my-3 mx-4 justify-between"
      >
        <div id="description-text">
          <p className="leading-[1.35rem] font-regular">{description}</p>
        </div>
        <div className="flex-col ml-3 leading-4">
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
        <DotsHorizontalIcon
          className="h-6 w-6 cursor-pointer hover:scale-110 transition-all ease-in-out active:scale-95"
          style={style}
        />
      </footer>
    </div>
  );
}

export default Card;
