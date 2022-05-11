import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='template'
              label='template'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='this is simply a base template that im using at the moment'
              label='template'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='this is simply a base template that im using at the moment'
              label='template'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='this is simply a base template that im using at the moment'
              label='template'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='this is simply a base template that im using at the moment'
              label='template'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;