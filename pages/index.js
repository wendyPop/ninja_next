import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | home </title>
        <meta name="keyword" content="roha"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab, ad assumenda consequuntur deserunt ex ipsam iure nulla quaerat similique totam voluptates. Dicta distinctio ipsam ipsum nihil, non provident repellendus?</p>
        <Link href='/ninja'>
          <span className={styles.btn}>See Ninja Listing</span>
        </Link>
      </div>
    </>
  )
}
