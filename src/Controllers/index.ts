import {Units} from '../Model/data/units';

export const changeTempretureUnit = (unit: Units, temp: number = 0) =>
  Math.floor(unit === Units.FAHRENHEIT ? (temp * 9) / 5 + 32 : temp);
