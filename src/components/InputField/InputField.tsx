import { useTheme } from '../../context/useTheme';
import Search from '../../assets/images/search.png';
import style from './InputField.module.scss';

interface InputFieldProps {
  onSearch: (name: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ onSearch }) => {
  const { theme } = useTheme();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    onSearch(name);
  };

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
          onInput={handleSearch}
          className={`${style.field} ${theme}`}
          type="text"
          name="country"
          id="country"
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
};
