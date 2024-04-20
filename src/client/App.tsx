import '@/client/App.css';

import { Button } from '@/client/components/ui/button';
import { ModeToggle } from '@/client/components/mode-toggle';

import Home from '@/client/Home';

const App = () => {
  return (
    <>
      <h1 className='text-6xl font-bold tracking-wide'>survivor star signs</h1>

      <div className='container p-4'>
        <img
          className='h-[20rem] m-auto rounded-xl'
          src='cover-photo.png'
          alt='dave & alex'
        />
      </div>

      <div className='container p-4'>
        <Button className='text-xl'>enter</Button>
      </div>

      <ModeToggle />

      <Home />
    </>
  );
};

export default App;
