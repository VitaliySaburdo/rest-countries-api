import { useState, useEffect } from 'react';
import { Container } from '../Container';
import Moon from '../../assets/images/moon.png';
import Sun from '../../assets/images/sun.png';
import style from './Header.module.scss';

export const Header = () => {
  const [theme, setTheme] = useState(true);

  const handleOnChangeTheme = () => {
    setTheme((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.className = theme ? 'dark-mode' : 'light-mode';
  }, [theme]);

  return (
    <Container>
      <header>
        <h1 className={style.title}>Where in the world?</h1>
        <div className={style.wrapper}>
          <button
            onClick={handleOnChangeTheme}
            className={style.btn}
            aria-label={`Switch to ${theme ? 'light' : 'dark'} mode`}
          >
            <img
              src={theme ? Moon : Sun}
              alt={theme ? 'Switch to light mode' : 'Switch to dark mode'}
            />
          </button>
          <p>{theme ? 'Dark mode' : 'Light mode'}</p>
        </div>
      </header>
    </Container>
  );
};
