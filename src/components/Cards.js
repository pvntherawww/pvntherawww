import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img_1 from '../images/img-1.jpg';
import img_2 from '../images/img-2.jpg';
import img_3 from '../images/img-3.jpg';
import img_4 from '../images/img-4.jpg';
import img_5 from '../images/img-5.jpg';
import { Link} from "react-router-dom";
import PriceList from './pages/PriceList';


function Cards() {
  return (
    
    <div className='cards'>
      <h1>What I'm doing</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
         
           <CardItem
              src={img_1}
              text='Web development'
              path='/pricelist'
            /> 
            <CardItem
              src={img_2}
              text='Creating clips'
              path='/pricelist'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img_3}
              text='Beatmaking'
              path='/pricelist'
            />
            <CardItem
              src={img_4}
              text='Mixing and mastering'
              path='/pricelist'
            />
            <CardItem
              src={img_5}
              text='Videogame creation'
              path='/pricelist'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;