import style from './FilterField.module.scss';
import Arrow from '../../assets/images/icon-arrow-down.png';

export const FilterField = () => {
  return (
    <>
      <div className={style.fieldWrapper}>
        <img className={style.arrow} src={Arrow} alt="arrow" width={10} />
        <select className={style.field} name="filter" id="filter">
          Filter by Region
          <option value="All">Select Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
};
