import React, { useState } from "react";
import Card from "./Card";
import { ChevronRightIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import { categoryData } from "../utils/data";

function Column({ name, cards, categoryData }) {
  const [columnOpen, setColumnOpen] = useState(true);

  return (
    <div className="flex-col h-full bg-gray-100 rounded-3xl mx-3 min-h-[6rem] mt-10">
      <header className="flex justify-between ml-7 mr-4 mt-4">
        <h1 className="text-[1.7rem] font-semibold">{name}</h1>
        <div className="flex items-center space-x-4">
          <DotsHorizontalIcon className="h-7 w-7 cursor-pointer text-gray-500 hover:scale-110 transition-all ease-in-out active:scale-95" />
          <ChevronRightIcon className="h-8 w-8 cursor-pointer text-gray-500 hover:scale-110 transition-all ease-in-out active:scale-95" />
        </div>
      </header>
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          category={card.category}
          dueDate={card.dueDate}
          duration={card.duration}
          urgent={card.urgent}
          color={
            categoryData.find((category) => category.title === card.category)
              ?.color
          }
        />
      ))}
      <div className="mx-auto w-[316px]"></div>
    </div>
  );
}

export default Column;
