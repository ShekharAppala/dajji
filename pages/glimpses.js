import axios from 'axios'
import React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'
import styles from "../styles/glimpses.module.css"
// import { dummy } from '../data'
import { useState } from 'react'
import Pagination from '../components/pagination'
import AsideCom from '../components/asideCom'


function Glimpses({ data }) {
     console.log(data)

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
    return (
        <div className={styles.glimpsesBody}>
            <Layout>
                <div >
                    <div className='row px-3'>
                        <div className={`col-md-4 col-lg-3`}>
                            <AsideCom />

                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className={styles.bgContaner}>
                                {currentRecords.map((card, i) => {
                                    console.log(card)
                                    return (
                                        <div  >
                                            <Card card={card} key={i} />
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <Pagination
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage} />
                </div>
            </Layout>
        </div>
    )
}

export const getStaticProps = async () => {
    const glimpses = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses?populate=*`)

    return {
        props: {
            data: glimpses.data.data
        }
    };
}
export default Glimpses

