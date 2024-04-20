import './App.css';
import Home from './Home';

import { Button } from './components/ui/button';
import { ModeToggle } from './components/mode-toggle';

const App = () => {
  return (
    <>
      <h1>survivor zodiac</h1>

      <div className='card'>
        <img
          className='h-[20em] m-auto rounded-xl'
          src='cover-photo.png'
          alt='dave & alex'
        />
      </div>

      <div className='card'>
        <Button>enter</Button>
      </div>

      <ModeToggle />

      <Home />
    </>
  );
};

export default App;
