import React from 'react'
import styles from "../styles/glimpses.module.css"

function AsideCom() {

    const entrys=["1 Aug’22","1 Aug’22","1 Aug’22","1 Aug’22","1 Aug’22","1 Aug’22",]
  return (
    <div className={styles.Aside} >
        
        <h1 >glimpses</h1>
        <p>A live journal of blessed activities in and around Kanha with Daaji</p>
        
        <iframe className='aside-ifreame' src="https://www.youtube.com/embed/bu67fO5PyxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Simple tips to avoid making mistakes by Daaji</p>
        <hr />

        <h3>Archive</h3>
        <h5>Last 5 entrys</h5>
        <ul>
            {entrys.slice(0,5).map((item)=> <li>{item}</li>)}
        </ul>
        <h5>Last month</h5>
        <h5>last Year</h5>
    </div>
  )
}

export default AsideCom