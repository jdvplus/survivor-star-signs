import { useTheme } from '@/client/components/theme-provider';

import { Button } from '@/client/components/ui/button';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('vite-ui-theme');
    currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <Button onClick={toggleTheme} variant='outline' size='icon'>
      <Sun className='h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
