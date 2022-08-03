import React, { useState } from "react";
import Card from "./Card";
import { ChevronRightIcon, DotsHorizontalIcon } from "@heroicons/react/solid";

function Column({ name, cards }) {
  const [columnOpen, setColumnOpen] = useState(true);

  return (
    <div className="flex-col h-full bg-gray-100 rounded-3xl mx-4 min-h-[7rem] mt-10">
      <header className="flex justify-between ml-7 mr-4 mt-4">
        <h1 className="text-[1.7rem] font-bold">{name}</h1>
        <div className="flex items-center space-x-4">
          <DotsHorizontalIcon className="h-7 w-7 cursor-pointer text-gray-500" />
          <ChevronRightIcon className="h-9 w-9 cursor-pointer text-gray-500" />
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
        />
      ))}
      <div className="w-[316px]"></div>
    </div>
  );
}

export default Column;
