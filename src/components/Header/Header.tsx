import { Container } from '../Container';
import Moon from '../../assets/images/moon.png';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <Container>
        <header>
          <h1 className={style.title}>Were in the world?</h1>
          <div className={style.wrapper}>
            <button className={style.btn}>
              <img src={Moon} alt="moon" />
            </button>
            <p>Dark mode</p>
          </div>
        </header>
      </Container>
    </>
  );
};
