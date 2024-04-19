import './App.css';

import { Button } from './components/ui/button';
import { ModeToggle } from './components/mode-toggle';

const App = () => {
  return (
    <div>
      <h1>survivor zodiac</h1>

      <div className='card'>
        <img
          src='/1/colleen.png'
          alt='Colleen Haskell'
          style={{ display: 'block', margin: '0 auto', height: '30em' }}
        />
      </div>

      <div className='card'>
        <Button>enter</Button>
      </div>

      <ModeToggle />
    </div>
  );
};

export default App;
