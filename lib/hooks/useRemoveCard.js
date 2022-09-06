import { supabase } from "../utils/client";
import { useState } from "react";

const useRemoveCard = () => {
  const [isRemovingCard, setIsRemovingCard] = useState(false);
  const [cards, setCards] = useState();

  const removeCard = async () => {
    setIsRemovingCard(true);
    setCards(cards);
    await supabase.from("cards").delete().match({ id: 2 });
    setIsRemovingCard(false);
  };

  return [removeCard, isRemovingCard];
};

export default useRemoveCard;
