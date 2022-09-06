import { supabase } from "../utils/client";
import { useState } from "react";

const useRemoveCard = () => {
  const [isRemovingCard, setIsRemovingCard] = useState(false);

  const removeCard = async (card) => {
    setIsRemovingCard(true);
    setCards([...cards, card]);
    await supabase.from("cards").delete(card);
    setIsRemovingCard(false);
  };

  return [removeCard, isRemovingCard];
};

export default useRemoveCard;
