import Link from 'next/link'
import React from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import styles from "../styles/prvCom.module.css"

function PevNextCom() {
    const dummy = [
        {
            img: '/Janmashtami.jpg',
            title: "LOOK AFTER YOUR INTENTIONS",
            date: 'Aug 26. 2022'
        },
        {
            img: '/Experience.jpeg',
            title: "EXPERIENCE TIMELESS WISDOM",
            date: 'Aug 26. 2022'
        },
        {
            img: '/Humanity.jpg',
            title: "HUMANITY IS ONE",
            date: 'Aug 26. 2022'
        },
        {
            img: '/Transision.jpg',
            title: "THE TEACHINGS OF GITA | YOGIC TRANSMISSION OF KRISHNA",
            date: 'Aug 26. 2022'
        },

    ]


    return (
        <div className={styles.bgContaner}>
            <div className='row'>
                <div className={`col-6 ${styles.prveContainer}`}  >
                    <div className={`d-none d-md-block ${styles.topimgContaner}`}>
                        <img src='/Experience.jpeg'  />
                    </div>
                   
                    <FaLessThan className={styles.icon} />
                    <div  >
                        <div >
                            <Link className={styles.link} href="/">
                              <p> <span >Previous post</span></p> 
                            </Link>
                        </div>
                        <Link className={styles.link} href="/"><span>Humanity is One</span></Link>
                    </div>

                </div>
                <div className={`col-6 ${styles.nextContainer} `}  >
                    <div >
                        <div >
                            <Link className={styles.link} href="/">
                              <p>  <span >Next post</span></p>
                            </Link>
                        </div>
                        <Link className={styles.link} href="/"><span>Humanity is One</span></Link>
                    </div>
                    <FaGreaterThan className={styles.icon} />
                    <div className={`d-none d-md-block ${styles.topimgContaner}`}>
                        <img src='/Transision.jpg' />
                    </div>
                </div>
            </div>
            <hr />
            <div >
                <div className={styles.titlediv}>
                    <h3>RELATED POSTS</h3>
                    </div>
                <div className='row' >
                    {dummy.map((card) => {
                        console.log(card)
                        return (
                            <div className={`${styles.card} col-12 col-md-6 col-lg-3 `} >

                                <div className={styles.imgContaner}>
                                    <img src={card.img} className='w-20' />
                                </div>
                                <div >
                                    <Link className={styles.link} href="/"><h4>{card.title}</h4></Link>

                                    <h6>
                                        <Link className={styles.link} href="/">
                                            <span>{card.date}</span>
                                        </Link>
                                        </h6>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default PevNextCom