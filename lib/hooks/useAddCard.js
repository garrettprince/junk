import { supabase } from "../utils/client";
import { useState } from "react";

const useAddCard = () => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cards, setCards] = useState("");

  const addCard = async (card) => {
    setIsAddingCard(true);
    setCards([...cards, card]);
    await supabase.from("cards").insert(card);
    setIsAddingCard(false);
  };

  return [addCard, isAddingCard];
};

export default useAddCard;
