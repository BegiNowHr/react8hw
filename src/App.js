import React from 'react';

const TourCard = ({ children, image }) => {
  return (
    <div className="tour-card">
      <img src={image} alt="Tour" />
      {children}
    </div>
  );
};

const ToursPage = () => {
  const egyptImagePath = require('./img/egypt.jpeg').default;
  const italyImagePath = require('./img/italy.jpeg').default;
  const thailandImagePath = require('./img/tailand.jpeg').default;

  return (
    <div>
      <h1>Горячие Туры</h1>
      <div className='tours'>
      <TourCard image={egyptImagePath} >
        <h2>Тур в Египет</h2>
        <p>Продолжительность: 7 дней</p>
        <p>Цена: $1000</p>
      </TourCard>
      <TourCard image={italyImagePath}>
        <h2>Тур в Италию</h2>
        <p>Продолжительность: 5 дней</p>
        <p>Цена: $1800</p>
      </TourCard>
      <TourCard image={thailandImagePath}>
        <h2>Тур в Таиланд</h2>
        <p>Продолжительность: 10 дней</p>
        <p>Цена: $1500</p>
      </TourCard>
      </div>
    </div>
  );
};

export default ToursPage;
