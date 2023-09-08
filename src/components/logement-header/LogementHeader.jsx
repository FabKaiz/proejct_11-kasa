import React from 'react'
import './logementHeader.scss'
import Tag from '../tag/Tag.jsx'
import Rating from '../rating/Rating.jsx'

const LogementHeader = ({ title, host, location, tags, rating }) => {
  return (
    <div className='logement__page-content__header'>
      <div className='content__header-left'>
        <h1 className='title h2'>{title}</h1>
        <h2 className='location'>{location}</h2>
        <div className='content__header-tags'>
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </div>
      </div>
      <div className='content__header-right'>
        <div className='content__header-right__rating'>
          <Rating ratingValue={Math.round(parseInt(rating))} />
        </div>
        <div className='content__header-right__host'>
          <p className='host__name'>{host.name}</p>
          <img src={host.picture} alt='host picture' />
        </div>
      </div>
    </div>
  )
}

export default LogementHeader
