import { Button } from '@/client/components/ui/button';
import ThemeToggle from '@/client/components/theme-toggle';

import SurvivorCarousel from '@/client/components/SurvivorCarousel';
import Home from '@/client/components/Home';

const App = () => {
  return (
    <div className='my-12'>
      <h1 className='text-6xl font-bold tracking-wide'>survivor star signs</h1>

      <div className='container p-4'>
        <img
          className='h-[20rem] m-auto rounded-xl'
          src='cover-photo.png'
          alt='dave & alex'
        />
      </div>

      <SurvivorCarousel apiRoute='/api/random' />

      <div className='container p-4'>
        <Button className='text-xl'>enter</Button>
      </div>

      <ThemeToggle />

      <Home />
    </div>
  );
};

export default App;
