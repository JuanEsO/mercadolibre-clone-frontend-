import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home () {
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <meta name="description" content="Compra y vende muy facil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo_ML.png" />
      </Head>
      <main className={styles.main}>
        <h1 style={{ display: 'none' }}>Compre productos con Envío Gratis en el día en Mercado Libre. Encuentre miles de marcas y productos a precios increíbles.</h1>
      </main>
    </>
  )
}
