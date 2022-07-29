import React, { useState } from "react";
import Card from "./Card";
import { ChevronRightIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import AddCardModal from "./AddCardModal";

function Column({ name, cards }) {
  return (
    <div className="flex-col h-full bg-gray-300/40 rounded-[2rem] mx-4 min-w-[23rem] min-h-[7rem] mt-10">
      <header className="flex justify-between mx-7 mt-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="flex items-center space-x-4">
          <DotsHorizontalIcon className="h-8 w-8 cursor-pointer text-gray-500" />
          <ChevronRightIcon className="h-10 w-10 cursor-pointer text-gray-500" />
        </div>
      </header>
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          category={card.category}
          dueDate={card.dueDate}
          minutesDuration={card.minutesDuration}
          urgent={card.urgent}
        />
      ))}
    </div>
  );
}

export default Column;
