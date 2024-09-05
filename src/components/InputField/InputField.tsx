import { useTheme } from '../../context/useTheme';
import Search from '../../assets/images/search.png';
import style from './InputField.module.scss';

export const InputField = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={style.inputContainer}>
        <img
          className={
            theme === 'dark' ? style.darkModeIcon : style.lightModeIcon
          }
          src={Search}
          alt="search"
          width={25}
          height={25}
        />
        <input
          className={
            theme === 'dark' ? `${style.field} ${style.darkField}` : style.field
          }
          type="text"
          name="country"
          id="country"
        />
      </div>
    </>
  );
};
