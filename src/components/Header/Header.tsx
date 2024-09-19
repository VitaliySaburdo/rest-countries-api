import { useTheme } from '../../hooks/useTheme';
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
              alt={`Switch to ${theme} mode`}
            />
            <p className={theme}>
              {theme === 'dark' ? 'Dark mode' : 'Light mode'}
            </p>
          </button>
        </div>
      </header>
    </Container>
  );
};
