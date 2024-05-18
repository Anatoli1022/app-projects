import React, { useState } from 'react';
import './App.css';

function App() {
  const [one, setOne] = useState<string>('');
  const [two, setTwo] = useState<string>('');
  const [three, setThree] = useState<string>('');
  const [four, setFour] = useState<string>('');
  const [five, setFive] = useState<string>('');
  const [six, setSix] = useState<string>('');

  const [borderRadius, setBorderRadius] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.buttons !== 1) return; // проверка, что нажата левая кнопка мыши
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setBorderRadius({ x, y });
  };

  return (
    <div className="App">
      <div
        style={{
          // border: one,
          // borderBottomLeftRadius: two,
          // borderBottomRightRadius: three,
          // borderTopLeftRadius: four,
          // borderTopRightRadius: five,
          // borderRadius: six,

          borderTopRightRadius: `${borderRadius.x}px`,
        }}
        className="block"
      >
        <div
          className="dot"
          onMouseMove={handleMouseMove}
          style={{ right: 0, top: `${borderRadius.y }px` }}
        >
          1
        </div>
      </div>
      <form className="form">
        <input
          placeholder="border"
          className="input"
          value={one}
          onChange={(e) => setOne(e.target.value)}
        />
        <input
          placeholder="border-bottom-left-radius"
          className="input"
          value={two}
          onChange={(e) => setTwo(e.target.value)}
        />
        <input
          placeholder="border-bottom-right-radius"
          className="input"
          value={three}
          onChange={(e) => setThree(e.target.value)}
        />
        <input
          placeholder="border-top-left-radius"
          className="input"
          value={four}
          onChange={(e) => setFour(e.target.value)}
        />
        <input
          placeholder="border-top-right-radius"
          className="input"
          value={five}
          onChange={(e) => setFive(e.target.value)}
        />
        <input
          placeholder="border-radius"
          className="input"
          value={six}
          onChange={(e) => setSix(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [borderRadius, setBorderRadius] = useState<{ x: number; y: number }>({
//     x: 0,
//     y: 0,
//   });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     if (e.buttons !== 1) return; // проверка, что нажата левая кнопка мыши
//     const x = e.nativeEvent.offsetX;
//     const y = e.nativeEvent.offsetY;
//     setBorderRadius({ x, y });
//   };

//   return (
//     <div className="App">
//       <div className="container" onMouseMove={handleMouseMove}>
//         <div
//           className="square"
//           style={{
//             borderRadius: `${borderRadius.x}px ${300 - borderRadius.x}px ${
//               300 - borderRadius.y
//             }px ${borderRadius.y}px`,
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default App;
