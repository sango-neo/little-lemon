import React from 'react';
import './Main.css';
import heroImg from '../../assets/home-hero-img.png'
import FeaturedCard from './components/FeaturedCard';
import { Link } from 'react-router-dom';
import TestimonialsCard from './components/TestimonialsCard';

import testimonialsData from '../../assets/testimonial-data.json';


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
      <section className='content-section testimonials-section' style={{textAlign: 'center'}}>
        <h2>Testimonials</h2>
        <div className='testimonial-cards-wrapper'>
          {testimonialsData.map(testimonial => {
            return <TestimonialsCard rating={testimonial.rating} name={testimonial.name} imgUrl={testimonial.imgUrl} comment={testimonial.comment} key={testimonial.imgUrl}/>
          })}
        </div>
      </section>
      <section className='content-section about-section' style={{textAlign: 'center'}}>
        <article className='about-ll'>
          <h2>Our Story</h2>
          <h3>Little Lemon</h3>
          <h3>Chicago</h3>
          <p>
          Little Lemon, a cozy Mediterranean eatery, was born from the passion for authentic flavors and warm hospitality shared by its founders. Inspired by their travels and culinary adventures, these two folks set out to create a haven where every dish tells a story and every guest feels like family. With fresh ingredients and time-honored recipes, Little Lemon brings a taste of the Mediterranean to your table, inviting you to savor the essence of sun-kissed shores and shared memories.
          </p>
        </article>
        <div className='img-wrapper'>
          <img src="https://res.cloudinary.com/dugyuridn/image/upload/v1710097917/founder1_yaolwb.png" alt="founders image 1" className='img-founder-1' />
          <img src="https://res.cloudinary.com/dugyuridn/image/upload/v1710097950/founder2_scguhb.png" alt="founders image 2" className='img-founder-2'/>
        </div>
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