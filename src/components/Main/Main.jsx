import React from 'react';
import './Main.css';
import heroImg from '../../assets/home-hero-img.png'
import FeaturedCard from './components/FeaturedCard';
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <main>
      <section className='content-section hero-section'>
        <div className="hero-details">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/reservations" role='button' className='hero-cta'>Reserve a Table</Link>
        </div>
        <div className='hero-img'>
          <img src={heroImg} alt="hero image of Mediteranean sandwiches" />
        </div>
      </section>
      <section className='content-section featured-section' id='menu'>
        <div className="featured-details">
          <h2>This week's specials!</h2>
          <Link to="/order-online" role='button' className='featured-cta'>Online Menu</Link>
        </div>
        <div className="featured-cards">
          {featuredCardData && featuredCardData.map(cardData => {
            return <FeaturedCard key={cardData.imgUrl} imgUrl={cardData.imgUrl} title={cardData.title} descr={cardData.descr} price={cardData.price} />
          })}
        </div>
      </section>
      <section className='content-section' style={{textAlign: 'center'}}>
        Testimonials
      </section>
      <section className='content-section' style={{textAlign: 'center'}}>
        About Little Lemon
      </section>
    </main>
  )
}

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

export default Main