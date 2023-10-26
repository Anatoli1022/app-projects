import Card from './components/card/Card';

import Switcher from './hooks/Switcher';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center transition duration-200 dark:bg-gray-900 p-10 ">
      <Switcher />
      <Card />
    </div>
  );
}

export default App;
