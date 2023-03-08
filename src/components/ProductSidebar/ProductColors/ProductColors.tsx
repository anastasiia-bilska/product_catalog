import React, { memo } from 'react';
import './ProductColors.scss';
import { ProductColorsCircle } from './ProductColorsCircle';

interface Props {
  colorsAvailable: string[];
  currentColor: string;
}

export const ProductColors: React.FC<Props> = memo(
  ({ colorsAvailable, currentColor }) => {
    return (
      <div className="product-colors product-sidebar__product-colors">
        <div className="product-colors__text">
          <p className="product-colors__title">Available colors</p>
          <p className="product-colors__id">ID: 802390</p>
        </div>
        <div className="product-colors__info">
          {colorsAvailable.map((color) => (
            <ProductColorsCircle
              productColor={currentColor}
              color={color}
              key={color}
            />
          ))}
          {/* <ProductColorsCircle color="black" isActive />
        <ProductColorsCircle color="gold" />
        <ProductColorsCircle color="midnightgreen" />
        <ProductColorsCircle color="silver" /> */}
        </div>
      </div>
    );
  },
);
