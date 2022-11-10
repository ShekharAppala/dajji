import React from 'react'
import styles from '../styles/glimpses.module.css'
import { FiHeart, FiUpload } from 'react-icons/fi'
import Link from 'next/link'




function Card({ card }) {
  
  return (

    <div className='container my-3'>
      <Link class="text-decoration-none text-dark" href={`/glimpses/${card.id}`}>
        <div className={`row ${styles.card}`}>
          <div className={styles.cardIcon}>
            <FiHeart className='mx-3' />
            <FiUpload />
          </div>
          <div className='row'>
          <div className={`col-lg-4 ${styles.cardImg} `}>
              <img src={card.attributes.featured_Image.data.attributes.url} className='w-60 rounded' />
            </div>
          <div className={`col-lg-8 ${styles.cardContent}`}>
            <h1 >{card.attributes.title}</h1>
            <p >{card.attributes.short_Description}</p>
          </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card