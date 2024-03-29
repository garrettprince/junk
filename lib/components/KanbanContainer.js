import React, { useState, Fragment, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import AddCardModal from "./AddCardModal";
import Column from "./Column";
import { motion } from "framer-motion";
import { supabase } from "../utils/client";
import useAddCard from "../hooks/useAddCard";
import { statusTypes, columns, mockCards, categoryData } from "../utils/data";
import useCard from "../hooks/useCards";

function KanbanContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, isFetchingCards, refreshCards] = useCard();
  const [addCard, isAddingCard] = useAddCard();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  refreshCards()

  // useEffect(() => {
  //   fetchCards();
  // }, []);

  // const fetchCards = async () => {
  //   const { data } = await supabase.from("cards").select("*");
  //   setCards(data);
  //   console.log(data);
  // };

  // const addCard = async (card) => {
  //   setCards([...cards, card]);
  //   await supabase.from("cards").insert(card);
  // };

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
        className="flex items-center space-x-4 absolute bottom-0 left-0 m-10 transition ease-in-out transform duration-100 hover:scale-105 active:scale-95"
      >
        <PlusIcon className="flex h-10 w-10 dark:text-white" />
        {/* <p className="dark:hover:text-white dark:text-transparent text-[1.7rem] font-semibold">
          New Task
        </p> */}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            duration: 3.8,
            type: "spring",
            damping: 25,
            stiffness: 500,
          }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bg-black/50 inset-0 h-full w-full flex justify-center align-middle"
        >
          <AddCardModal
            addCard={addCard}
            handleClose={closeModal}
            categoryData={categoryData}
          />
        </motion.div>
      )}
    </>
  );
}

export default KanbanContainer;
