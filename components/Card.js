import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { categoryColors } from "../utils/data";

function Card({
  title,
  description,
  category,
  dueDate,
  duration,
  urgent,
  color,
}) {
  const backgroundColor = categoryColors.find(
    (category) => category.title === color
  )?.backgroundColor;

  const borderColor = categoryColors.find(
    (category) => category.title === color
  )?.color;

  return (
    <div
      className=" h-max w-[19rem] rounded-2xl border-[6px] cursor-grab m-4 transition-all hover:scale-[1.015] active:scale-100"
      style={{ backgroundColor, borderColor }}
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
          <h2
            className="flex text-sm font-extrabold justify-center"
            style={{ color: borderColor }}
          >
            {duration}
          </h2>
          <h2
            className="flex text-xs font-extrabold"
            style={{ color: borderColor }}
          >
            MIN
          </h2>
        </div>
      </section>
      <footer className="flex justify-between mx-4 mt-4 mb-1 content-center">
        <h2 className="text-sm font-extrabold" style={{ color: borderColor }}>
          {category.toUpperCase()}
        </h2>
        <h2 className="text-sm font-extrabold" style={{ color: borderColor }}>
          {`DUE ` + dueDate.toUpperCase()}
        </h2>
        <DotsHorizontalIcon
          className="h-6 w-6 cursor-pointer hover:scale-110 transition-all ease-in-out active:scale-95"
          style={{ color: borderColor }}
        />
      </footer>
    </div>
  );
}

export default Card;
