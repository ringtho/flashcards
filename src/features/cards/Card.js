import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { cardsSelector } from "./cardsSlice";
// import selector

export default function Card({ id }) {
  // const card = useSelector(cardsSelector(state,id))
  const card = useSelector(state => state.cards.cards[id])
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
