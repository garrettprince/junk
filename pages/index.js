import Head from "next/head";
import { useState, useEffect } from "react";
import KanbanContainer from "../components/KanbanContainer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Junk</title>
      </Head>
      <KanbanContainer />
    </div>
  );
}

/*
const columns = [
  'not started',
  'in progress',
  'complete',
]

const cardsList = [
  {
    title,
    description,
    status,
    etc...
  }
]

const [cards, setCards] = useState(cardList)
*/

// Index <KanbanContainer />

// KanbanContainer -> columns.map((column) => (<Column title={column.title} cards={cards.filter(card => card.status === column.title)} /> )), Add Card Modal, setCards([...cards, { new card }])

// State for the modal const [open, isOpen] = useState(false), {isOpen && <AddCardModal />}

//    Inside the column component: 
{/* <Card  >  */}