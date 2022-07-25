import React, { useState } from "react";
import { PlusIcon } from '@heroicons/react/solid'
import AddCardModal from "./AddCardModal";
import Column from "./Column";

function KanbanContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section id="columns">
          <Column />
      </section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full p-3 bg-gray-300/40"
      >
        <PlusIcon className="h-10 w-10" />
      </button>
      {isOpen && <AddCardModal />}
    </>
  );
}

export default KanbanContainer;
