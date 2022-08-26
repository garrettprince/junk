import React, { useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { colorData } from "../utils/data";
import OptionsMenu from "./OptionsMenu";

function Card({
  title,
  description,
  category,
  dueDate,
  duration,
  urgent,
  categoryColor,
}) {

  // TODO: Find out how to make this section work for the cards becasue it doesn't now that I removed cardColors and replaced it with categoryData in the data file
  const { color, backgroundColor } = colorData.find((c) => c.name === categoryColor)

  const [optionsMenu, setOptionsMenu] = useState(false)

  const toggleOptions = () => {
    setOptionsMenu(!optionsMenu)
  }

  return (
    <div
      className=" h-max w-[19rem] rounded-2xl border-[6px] cursor-grab m-4"
      style={{ backgroundColor, borderColor: color }}
    >
      <header className="flex justify-between items-center mx-4 mt-3">
        <h1 className="font-semibold text-xl dark:text-white">{title}</h1>
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
          <p className="leading-[1.35rem] font-regular dark:text-white">
            {description}
          </p>
        </div>
        <div className="flex-col ml-3 leading-4">
          <h2
            className="flex text-sm font-extrabold justify-center"
            style={{ color: color }}
          >
            {duration}
          </h2>
          <h2
            className="flex text-xs font-extrabold"
            style={{ color: color }}
          >
            MIN
          </h2>
        </div>
      </section>
      <footer className="flex justify-between mx-4 mt-4 mb-1 content-center">
        <h2 className="text-sm font-extrabold" style={{ color: color }}>
          {category.toUpperCase()}
        </h2>
        <h2 className="text-sm font-extrabold" style={{ color: color }}>
          {`DUE ` + dueDate.toUpperCase()}
        </h2>
        <DotsHorizontalIcon
          className="h-6 w-6 cursor-pointer hover:scale-110 transition-all ease-in-out active:scale-95"
          style={{ color: color }}
          onClick={toggleOptions}
        />
        {optionsMenu && (
          <OptionsMenu />
        )}
      </footer>
    </div>
  );
}

export default Card;
