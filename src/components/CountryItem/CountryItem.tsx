import { Country } from '../../../types/Country';
import style from './CountryItem.module.scss';

interface CartItemProps {
  country: Country;
}

export const CountryItem: React.FC<CartItemProps> = ({ country }) => {
  return (
    <li className={style.item}>
      <img className={style.img} src={country.flags.png} alt="flag image" />
      <div className={style.wrapper}>
        <h2 className={style.title}>{country.name.common}</h2>
        <p className={style.text}>
          Population: <span className={style.data}>{country.population}</span>
        </p>
        <p className={style.text}>
          Region: <span className={style.data}>{country.region}</span>
        </p>
        <p className={style.text}>
          Capital: <span className={style.data}>{country.capital}</span>
        </p>
      </div>
    </li>
  );
};
