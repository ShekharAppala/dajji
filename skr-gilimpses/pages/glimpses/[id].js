import Link from 'next/link'
import React from 'react'
import styles from '../../styles/glimpses.module.css'
import Layout from '../../components/layout'
import AsideCom from '../../components/asideCom'
import axios from 'axios'

import { FiHeart, FiUpload } from "react-icons/fi";



function Blog({ data }) {

  console.log(data)


  return (
    <div className={styles.glimpsesBody}>
      <Layout>
        <div className='row px-3'>
          <div className=" col-md-4 col-lg-3">
            <AsideCom />
          </div>

          <div className='col-md-8 col-lg-9 px-4'>
           <div className='container'>
          <div className='row'>
            <div className='mt-5'>
              <Link href='/glimpses'>
                <button className={styles.allpostBtn}>&larr; All posts</button>
              </Link>
            </div>
            <div className={styles.innercard}>
              <div className={styles.cardIcon}>
                <FiHeart className='mx-3' />
                <FiUpload />
              </div>
              <div className={`d-lg-none  ${styles.innerCardImg}`} >
                <img src={data.attributes.featured_Image.data.attributes.url} />

              </div>
              <h1>{data.attributes.title}</h1>
              <p>{data.attributes.short_Description}</p>

              <div className={`d-none d-lg-block  ${styles.innerCardImg}`} >
                <img src={data.attributes.featured_Image.data.attributes.url} />

              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  const { params } = ctx
  const glimpses = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses/${params.id}?populate=*`)

  return {
    props: {
      data: glimpses.data.data
    }
  };
}

export const getStaticPaths = async () => {
  const glimpses = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses?populate=*`
  );
  console.log(glimpses)

  const ids = glimpses.data.data.map((ele) => ele.id);

  return {

    paths: ids.map((id) => ({ params: { id: `${id}` } })),
    fallback: false,
  };
};



export default Blog




