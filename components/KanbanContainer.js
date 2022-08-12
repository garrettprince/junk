import React, { useState, Fragment } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import AddCardModal from "./AddCardModal";
import Column from "./Column";
import { motion } from "framer-motion";
import { statusTypes, columns, mockCards, categoryData } from "../utils/data";

// Fetch cards from the database, this will replaace mockCards

// 1) fetch data with a useEffect, so that the data fetch call is run upon mount
// 2) Do the same as above, but inside a custom hook
// 3) Use the powers of Next.js and use getServerSideProps

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
            categoryData={categoryData}
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
          <AddCardModal addCard={addCard} handleClose={closeModal} categoryData={categoryData} />
        </motion.div>
      )}
    </>
  );
}

export default KanbanContainer;
