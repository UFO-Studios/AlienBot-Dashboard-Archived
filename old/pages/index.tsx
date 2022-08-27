import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alien Bot Dashboard</title>
        <meta name="description" content="Alien Bot Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello there!</h1>
      <h2>The AlienBot Dashboard is still in progress.</h2>
      <h3 className="grey">But here are some links:</h3>
      <ul>
        <li>
          <Link href="https://discord.com/oauth2/authorize?client_id=800089810525356072&permissions=1103272991798&scope=bot%20applications.commands">
            AlienBot Invite
          </Link>    
        </li>
        <li>
          <Link href="https://discord.gg/tEk5eSXU7k">
          The Alien Empire Discord Server
          </Link>
          </li>
      </ul>
    </div>
  )
}

export default Home
