import React, { useState } from 'react';

const ShowMoreButton = ({ items, itemsToShow }) => {
  const [visibleItems, setVisibleItems] = useState(itemsToShow);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsToShow);
  };

  return (
    <div>
      {items.slice(0, visibleItems).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {visibleItems < items.length && (
        <button onClick={handleShowMore}>Показать еще</button>
      )}
    </div>
  );
};

// Пример использования
const App = () => {
  const data = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5'];

  return <ShowMoreButton items={data} itemsToShow={2} />;
};

export default App;
