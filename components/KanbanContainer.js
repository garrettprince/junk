import React, { useState, Fragment } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import AddCardModal from "./AddCardModal";
import Column from "./Column";
import { motion } from "framer-motion";
import { statusTypes } from "../utils/data";

const columns = [
  { name: "Not Started" },
  { name: "In Progress" },
  { name: "Stalled" },
  { name: "Completed" },
];

const mockCards = [
  {
    title: "Test",
    description: "Test description",
    category: "Dev",
    dueDate: "8/11",
    duration: "30",
    urgent: false,
    status: statusTypes.IN_PROGRESS,
  },
  {
    title: "Test2",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    duration: "45",
    urgent: true,
    status: statusTypes.COMPLETED,
  },
  {
    title: "Test3",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    duration: "45",
    urgent: true,
    status: statusTypes.STALLED,
  },
  {
    title: "Test4",
    description: "Another test",
    category: "Other",
    dueDate: "9/1",
    duration: "45",
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
      <section id="columns" className="flex justify-end mx-3 overflow-x-scroll">
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
        className="flex items-center space-x-2 rounded-full p-4 bg-gray-100 absolute bottom-0 left-0 m-10 transition ease-in-out transform duration-100 hover:scale-105 active:scale-95"
      >
        {/* <p className="text-transparent">New Task</p> */}
        <PlusIcon className="h-10 w-10" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 3.8, type: 'spring', damping: 25, stiffness: 500 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bg-black/50 inset-0 h-full w-full flex justify-center align-middle"
        >
          <AddCardModal addCard={addCard} handleClose={closeModal} />
        </motion.div>
      )}
    </>
  );
}

export default KanbanContainer;
