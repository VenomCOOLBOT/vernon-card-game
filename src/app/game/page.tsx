"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const initialDeck = [
  { id: 1, icon: "Brad", matched: false },
  { id: 2, icon: "Brad", matched: false },
  { id: 3, icon: "Tina", matched: false },
  { id: 4, icon: "Tina", matched: false },
  { id: 5, icon: "Gomez", matched: false },
  { id: 6, icon: "Gomez", matched: false },
  { id: 7, icon: "Da Babe", matched: false },
  { id: 8, icon: "Da Babe", matched: false },
  { id: 9, icon: "Joenathan", matched: false },
  { id: 10, icon: "Joenathan", matched: false },
  { id: 11, icon: "Nathan", matched: false },
  { id: 12, icon: "Nathan", matched: false },
  { id: 13, icon: "Melonie", matched: false },
  { id: 14, icon: "Melonie", matched: false },
  { id: 15, icon: "Alan", matched: false },
  { id: 16, icon: "Alan", matched: false },
  { id: 17, icon: "Volo", matched: false },
  { id: 18, icon: "Volo", matched: false },
  { id: 19, icon: "why are u still playing lol", matched: false },
  { id: 20, icon: "why are u still playing lol", matched: false },
];

function shuffleDeck(deck: typeof initialDeck) {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
}

export default function Game() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [cards, setCards] = useState(shuffleDeck(initialDeck));
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  function handleCardClick(id: number) {
    if (flippedCards.length === 2 || gameWon) {
      return;
    }

    const clickedCard = cards.find((card) => card.id === id);

    if (clickedCard && !clickedCard.matched && !flippedCards.includes(id)) {
      setFlippedCards((prev) => [...prev, id]);

      if (flippedCards.length === 1) {
        const firstCard = cards.find((card) => card.id === flippedCards[0]);
        const secondCard = clickedCard;

        if (firstCard && secondCard && firstCard.icon === secondCard.icon) {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.icon === firstCard.icon ? { ...card, matched: true } : card
            )
          );
        }

        setTimeout(() => setFlippedCards([]), 500);
      }
    }
  }

  function resetGame() {
    setCards(shuffleDeck(initialDeck));
    setFlippedCards([]);
    setGameWon(false);
  }

  return (
    <div className="flex justify-center items-center h-screen p-4">
      {gameWon ? (
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-red-600 mb-8 lg:mb-24">
            you won i guess... do your homework!!!!! ( ͡ಠ ʖ̯ ͡ಠ)
          </h1>
          <Button variant={"outline"} size={"lg"} onClick={resetGame}>
            PLAY AGAIN
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex justify-center items-center text-lg sm:text-xl lg:text-2xl font-bold border-2 border-foreground rounded-lg cursor-pointer ${
                flippedCards.includes(card.id) || card.matched
                  ? "text-orange-500 border-orange-500"
                  : "bg-background"
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              {flippedCards.includes(card.id) || card.matched ? (
                card.icon
              ) : (
                <span className="text-foreground">?</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
