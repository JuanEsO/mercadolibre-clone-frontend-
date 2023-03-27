import styles from './items_slug.module.scss'
import Image from 'next/image'
import { GET_ITEM, BACKEND_API } from '@/services'

// component to show when product is not found
const ProductDetailNotFound = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Producto no encontrado</h1>
        </div>
      </div>
    </div>
  )
}

const ProductDetail = ({ product }) => {
  const productData = product

  // if product is not found, show ProductDetailNotFound component
  if (!productData?.item) {
    return <ProductDetailNotFound />
  }

  return (
        <div className={styles.root}>
          <div className={styles.breadcrumb}>
          </div>
          <div className={styles.container}>
            <div className={styles.col_1}>
                <div className={styles.imageContainer}>
                  <Image
                    src={productData?.item?.picture}
                    alt={productData?.title}
                    width={680}
                    height={680}
                  />
                </div>
                <div className={styles.decriptionContainer}>
                  <h2 className={styles.descTitle}>Descripción del producto</h2>
                  <p className={styles.description}>{productData?.item?.description}</p>
                </div>
              </div>
            <div className={styles.col_2}>
              <div className={styles.condition}>
                {productData?.item?.condition === 'new' ? 'Nuevo' : 'Usado'} - {productData?.item?.sold_quantity} vendidos
               </div>
              <h1 className={styles.title}>{productData?.item?.title}</h1>
              <div className={styles.price}>
                <span className={styles.priceCurrency}>$</span>
                <span className={styles.priceAmount}>{productData?.item?.price.amount}</span>
                <span className={styles.priceDecimals}>{productData?.item?.price.decimals}</span>
              </div>
              <button className={styles.buyButton}>Comprar</button>
            </div>
          </div>
        </div>
  )
}

export async function getServerSideProps (context) {
  const { query, res } = context // get the query params from the url

  const returnToHome = () => {
    res.setHeader('location', '/')
    res.statusCode = 302
    res.end()
  }

  // if the query param is not present redirect to home
  if (!('id' in query)) {
    returnToHome()
    return { props: {} }
  }

  // make the request to the backend to get the item
  const response = await fetch(BACKEND_API + GET_ITEM(query.id))
  const data = await response?.json()

  return {
    props: {
      product: data ?? null
    }
  }
}

export default ProductDetail
