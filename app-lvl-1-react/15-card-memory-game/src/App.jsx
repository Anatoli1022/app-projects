import classNames from 'classnames/bind';
import styles from './App.scss';
import data from './data';
import { useEffect, useState } from 'react';

import SingleCard from './components/singleCard/SingleCard';
const cx = classNames.bind(styles);

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisables] = useState(false);
  const [lvl, setLvl] = useState(4);

  const handleClick = (e) => {
    setLvl(e.target.value);
    console.log(e.target.value);
    shuffleCards();
  };

  const shuffleCards = () => {
    const shufflesData = data.sort(() => Math.random() - 0.5);
    const shuffleCards = [
      ...shufflesData.slice(0, lvl),
      ...shufflesData.slice(0, lvl),
    ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffleCards);
    setTurns(0);
    setChoiseOne(null);
    setChoiseTwo(null);
  };

  // useEffect(() => {
  //   shuffleCards();
  // }, []);

  const handleChoise = (card) => {
    !choiseOne ? setChoiseOne(card) : setChoiseTwo(card);
    console.log(choiseOne);
    console.log(choiseTwo);
  };

  useEffect(() => {
    if (choiseOne && choiseTwo) {
      setDisables(true);
      if (choiseOne.title === choiseTwo.title) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.title === choiseOne.title) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
        console.log('not math');
      }
    }
  }, [choiseOne, choiseTwo]);

  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setDisables(false);
    setTurns((e) => e + 1);
  };

  return (
    <div className={cx('App')}>
      <h1 className={cx('title')}>Memory Game</h1>
      <div className={cx('wrapper-buttons')}>
        <button className={cx('button')} onClick={handleClick} value={8}>
          New game 1
        </button>{' '}
        <button className={cx('button')} onClick={handleClick} value={12}>
          New game 2
        </button>{' '}
        <button className={cx('button')} onClick={handleClick} value={16}>
          New game 3
        </button>{' '}
        <button className={cx('button')} onClick={handleClick} value={20}>
          New game 4
        </button>{' '}
        <button className={cx('button')} onClick={handleClick} value={24}>
          New game 5
        </button>
      </div>
      <div className={cx('wrapper-cards')}>
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handleChoise={handleChoise}
              flipped={card === choiseOne || card === choiseTwo || card.matched}
              disabled={disabled}
            />
          );
        })}
      </div>
      <span className={cx('turns')}>Turns: <span className={cx('turns-number')}>{turns}</span></span>
    </div>
  );
}

export default App;
