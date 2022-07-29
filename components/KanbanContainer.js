import React, { useState, Fragment } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import AddCardModal from "./AddCardModal";
import Column from "./Column";
import { Dialog, Transition } from "@headlessui/react";

const columns = [
  { name: "Not Started" },
  { name: "In Progress" },
  { name: "Completed" },
];

const statusTypes = {
  NOT_STARTED: "Not Started",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

const mockCards = [
  {
    title: "Test",
    description: "Test description",
    category: "Dev",
    dueDate: "8/11",
    minutesDuration: "30",
    urgent: false,
    status: statusTypes.IN_PROGRESS,
  },
  {
    title: "Test2",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    minutesDuration: "45",
    urgent: true,
    status: statusTypes.COMPLETED,
  },
  {
    title: "Test3",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    minutesDuration: "45",
    urgent: true,
    status: statusTypes.COMPLETED,
  },
  {
    title: "Test4",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    minutesDuration: "45",
    urgent: true,
    status: statusTypes.COMPLETED,
  },
];

function KanbanContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState(mockCards);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  return (
    <>
      <section id="columns" className="flex justify-center">
        {columns.map((column) => (
          <Column
            key={column.name}
            name={column.name}
            cards={cards.filter((card) => card.status === column.name)}
          />
        ))}
      </section>

      <button
        onClick={openModal}
        className="rounded-full p-4 bg-gray-300/40 absolute bottom-0 left-0 m-10"
      >
        <PlusIcon className="h-10 w-10" />
      </button>

      {isOpen && (
        <div className="fixed bg-black/40 inset-0 h-full w-full flex justify-center align-middle">
            <AddCardModal
              addCard={addCard}
              handleClose={closeModal}
            />
        </div>
      )}
    </>
  );
}

export default KanbanContainer;
