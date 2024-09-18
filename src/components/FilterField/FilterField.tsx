import { useTheme } from '../../context/useTheme';
import style from './FilterField.module.scss';
import Arrow from '../../assets/images/icon-arrow-down.png';

interface FilterFieldProps {
  onRegionFilter: (name: string) => void;
}

export const FilterField: React.FC<FilterFieldProps> = ({ onRegionFilter }) => {
  const { theme } = useTheme();
  const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.currentTarget.value;
    onRegionFilter(region);
  };

  return (
    <>
      <div className={style.selectWrapper}>
        <img
          className={
            theme === 'dark'
              ? `${style.icon} ${style.darkModeIcon}`
              : style.icon
          }
          src={Arrow}
          alt="arrow"
          width={10}
        />
        <select
          onChange={handleOnSelect}
          className={`${style.field} ${theme}`}
          name="filter"
          id="filter"
        >
          <option value="">Select Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </>
  );
};
