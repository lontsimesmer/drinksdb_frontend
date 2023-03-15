import React from 'react';
import Styles from './DisplayCards.module.css';

export default function DisplayCards() {
  return (
    <div className={Styles.Display__Cards}>
      <div className={Styles.Side__Bar}>
        <h3>Categories</h3>
        <div className="">
          <input type="checkbox" value="drink" name="water" className="" />
          <label htmlFor="water">Water</label>
          <br />
        </div>
        <div className="">
          <label htmlFor="milk">Milk</label>
          <input type="checkbox" value="drink" name="milk" className="" />
        </div>
        <div className="">
          <label htmlFor="tea">Tea</label>
          <input type="checkbox" value="drink" name="tea" className="" />
        </div>
        <div className="">
          <label htmlFor="soda">Soda</label>
          <input type="checkbox" value="drink" name="soda" className="" />
        </div>
        <div className="">
          <label htmlFor="coffee">Coffee</label>
          <input type="checkbox" value="drink" name="coffee" className="" />
        </div>
        <h3>Drinks</h3>
        <h3>Glasses</h3>
        <h3>Ingredients</h3>
      </div>
    </div>
  );
}
