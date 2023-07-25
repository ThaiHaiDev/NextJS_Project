import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="text-base font-semibold leading-7 text-red-500">Hello</h1>
      </div>
    </div>
  )
}

export default Home
