// import React, { useState, useEffect } from 'react';

// const ButtonTheme = () => {
//   const [button, setButton] = useState('');

//   const updateMenu = () => {
//     if (button === '') {
//       setButton('active');
//     } else {
//       setButton('');
//     }
//   };

//   useEffect(() => {
//     if (button === 'active') {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   }, [button]);

//   return (
//     <>
//       <button onClick={updateMenu} className="dark:text-white">
//         ButtonTheme
//       </button>
//     </>
//   );
// };

// export default ButtonTheme;

import { useEffect, useState } from 'react';

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}