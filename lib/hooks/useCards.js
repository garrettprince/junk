import { useEffect, useState } from "react";
import { supabase } from "../utils/client";

const useCard = () => {
    const [cards, setCards] = useState([]);
    const [isFetchingCards, setIsFetchingCards] = useState([])

    const fetchCards = async () => {
        const { data } = await supabase.from("cards").select("*");
        setCards(data);
    };
    
    useEffect(() => {
        fetchCards();
      }, []);

      return [cards, isFetchingCards, () => fetchCards()];
}

export default useCard;