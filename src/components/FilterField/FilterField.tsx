import style from './FilterField.module.scss';

export const FilterField = () => {
  return (
    <>
      <div className={style.fieldWrapper}>
        <select className={style.field} name="filter" id="filter">
          <option value="All">All</option>
        </select>
      </div>
    </>
  );
};
