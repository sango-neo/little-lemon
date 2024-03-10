import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";


const TestimonialsCard = ({ rating, imgUrl, name, comment }) => {
    const starIcons = [];

  for (let i = 0; i < Math.floor(rating); i++) {
    starIcons.push(<FaStar key={i} />);
  }

  if (rating % 1 !== 0) {
    starIcons.push(<FaStarHalfAlt key={starIcons.length} />);
  }

  while (starIcons.length < 5) {
    starIcons.push(<FaRegStar key={starIcons.length} />);
  }


  return (
    <article className='testimonials-card'>
        <div className="rating-wrapper">
            {starIcons.map(star => star)}
        </div>
        <div className="testimonial-content">
            <img src={imgUrl} alt="testimonial image" />
            <h4 className='testimonial-name'>{name}</h4>
            <p className="testimonial-text">"{comment}"</p>
        </div>
    </article>
  )
}

export default TestimonialsCard