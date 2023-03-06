import React from 'react';
import { Phone } from '../../types/Phone';
import './Card.scss';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    image,
    name,
    price,
    screen,
    capacity,
    ram,
  } = phone;

  return (
    <article className="card">
      <img className="card__img" src={image} alt={name} />

      <h4 className="card__title">{name}</h4>
      <div className="card__prices">
        <span className="card__prices--price">{`$${price}`}</span>
        <span className="card__prices--old-price">{`$${price}`}</span>
      </div>

      <div className="card__specifications">
        <div className="card__specifications--feature">
          <span>Screen</span>
          <span>Capacity</span>
          <span>RAM</span>
        </div>
        <div className="card__specifications--feature">
          <span>{screen}</span>
          <span>{capacity}</span>
          <span>{ram}</span>
        </div>
      </div>

      <div className="card__footer">
        <button type="button" className="card__button">
          Add to cart
        </button>
        <div className="card__footer--favorites"></div>
      </div>
    </article>
  );
};
