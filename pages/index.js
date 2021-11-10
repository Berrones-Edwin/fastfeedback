import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'

export default function Home() {
  const auth = useAuth()
  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Feedback</title>
        <meta name="description" content="App for description fast feedback in static app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {auth?.user ? (
          <>
            <h3>Current user : {auth.user.name}</h3>
            <button onClick={auth.signOut}>Sign out</button>
          </>
        ) : (
          <button onClick={auth.signInWithGithub}>Sign In with github</button>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
