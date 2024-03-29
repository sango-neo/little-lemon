import React from 'react'
// import scooter from '../../assets/scooter-icon.svg'

const FeaturedCard = ({ imgUrl, title, price, descr}) => {
  return (
    <article className='featured-card'>
            <div className="img-box">
              <img src={imgUrl} alt="image of dish" />
            </div>
            <div className="card-details">
              <h3>{title}</h3>
              <p className='food-description'>{descr}</p>
              <p className="price">${(Math.round(price * 100) / 100).toFixed(2)}</p>
              <a href="#">
                Order a delivery <span><i className="scooter-icon">{`->`}</i></span>
              </a>
            </div>
    </article>
  )
}

export default FeaturedCard