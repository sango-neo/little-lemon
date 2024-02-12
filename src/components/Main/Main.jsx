import React from 'react';
import './Main.css';
import heroImg from '../../assets/home-hero-img.png'
import FeaturedCard from './components/FeaturedCard';

const featuredCardData = [
  {
      imgUrl: 'https://res.cloudinary.com/dugyuridn/image/upload/v1707774563/greek-salad_oumuzt.jpg',
      title: 'Greek salad',
      descr: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: 12.99,
  },
  {
      imgUrl: 'https://res.cloudinary.com/dugyuridn/image/upload/v1707774563/bruschetta_opeabd.jpg',
      title: 'Bruschetta',
      descr: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: 5.99,
  },
  {
      imgUrl: 'https://res.cloudinary.com/dugyuridn/image/upload/v1707774559/lemon-dessert_nlcnp6.jpg',
      title: 'Lemon Dessert',
      descr: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: 5.00,
  }
];

const Main = () => {
  return (
    <main>
      <section className='hero-section'>
        <div className="hero-details">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <a href="./reservations" role='button' className='hero-cta'>Reserve a Table</a>
        </div>
        <div className='hero-img'>
          <img src={heroImg} alt="hero image of Mediteranean sandwiches" />
        </div>
      </section>
      <section className='featured-section'>
        <div className="featured-details">
          <h2>This week's specials!</h2>
          <a href="./order-online" role='button' className='featured-cta'>Online Menu</a>
        </div>
        <div className="featured-cards">
          {featuredCardData && featuredCardData.map(cardData => {
            return <FeaturedCard key={cardData.imgUrl} imgUrl={cardData.imgUrl} title={cardData.title} descr={cardData.descr} price={cardData.price} />
          })}
        </div>
      </section>
    </main>
  )
}

export default Main