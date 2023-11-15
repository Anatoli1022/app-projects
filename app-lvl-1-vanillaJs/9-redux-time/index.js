import store from './redux/store.js';
import { addCurrentTime} from './redux/actionCreators.js';
import {clearTimes} from './redux/actionCreators.js';
const button = document.getElementById('addTime');

const clearTimeButton = document.getElementById('clear-time');
button.addEventListener('click', () => store.dispatch(addCurrentTime()));

clearTimeButton.addEventListener('click', () => {
  store.dispatch(clearTimes());
});

const timerList = document.getElementById('list');

store.subscribe(() => {
  timerList.innerHTML = '';
  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement('li');
    li.innerText = time;
    timerList.appendChild(li);
  });
});

// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store just change ! ${store.getState()}`)
// );
// store.dispatch({ type: 'ADD_CURRENT_TIME', payload: '11:30:00' });

// store.dispatch({ type: 'ADD_CURRENT_TIME', payload: '11:3041:00' });
// unsubscribe();
// store.dispatch({ type: 'CLEAR_ALL_TIMES' });
