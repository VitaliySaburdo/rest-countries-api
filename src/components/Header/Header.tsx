import { useTheme } from '../../context/useTheme';
import { Container } from '../Container';
import Moon from '../../assets/images/moon.png';
import Sun from '../../assets/images/sun.png';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <header>
        <Link to={'/'}>
          <h1 className={style.title}>Where in the world?</h1>
        </Link>
        <div className={style.wrapper}>
          <button
            onClick={toggleTheme}
            className={style.btn}
            aria-label={`Switch to ${theme} mode`}
          >
            <img
              className={`${style.icon} ${
                theme === 'dark' ? style.darkModeIcon : style.lightModeIcon
              }`}
              src={theme === 'dark' ? Moon : Sun}
              alt={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            />
          </button>
          <p>{theme === 'dark' ? 'Dark mode' : 'Light mode'}</p>
        </div>
      </header>
    </Container>
  );
};
