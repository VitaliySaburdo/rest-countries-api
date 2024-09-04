import Search from '../../assets/images/search.png';
import style from './InputField.module.scss';

export const InputField = () => {
  return (
    <>
      <div className={style.inputContainer}>
        <img
          className={style.img}
          src={Search}
          alt="search"
          width={25}
          height={25}
        />
        <input
          className={style.field}
          type="text"
          name="country"
          id="country"
        />
      </div>
    </>
  );
};
