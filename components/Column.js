import React, { useState } from "react";
import Card from "./Card";
import { ChevronRightIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import AddCardModal from "./AddCardModal";

function Column() {
  

  return (
    <div className="flex-col h-full bg-gray-300/40 rounded-[2rem] mx-4">
      <header className="flex justify-between mx-7 mt-4">
        <h1 className="text-3xl font-bold">Column Name</h1>
        <div className="flex items-center space-x-4">
          <DotsHorizontalIcon className="h-8 w-8 cursor-pointer text-gray-500" />
          <ChevronRightIcon className="h-10 w-10 cursor-pointer text-gray-500" />
        </div>
      </header>
      <Card
        title="Card Title"
        description="This is a sample description to see how the spacing looks when entered in"
        category="dev"
        dueDate="8/11"
        minutesDuration="30"
      />

      

      
    </div>
  );
}

export default Column;
