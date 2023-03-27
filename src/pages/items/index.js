import Head from 'next/head'
import styles from './items.module.scss'
import BreadCrumb from '@/components/Breadcrumb'
import ProductItem from '@/components/productItem'
import { SEARCH_ITEMS, BACKEND_API } from '@/services'
import { useRouter } from 'next/router'

const ListItemsEmpty = () => {
  return (
        <div className={styles.listItemsEmpty}>
            <h2>No se encontraron productos</h2>
        </div>
  )
}

const Items = ({ products }) => {
  const router = useRouter()
  const { items, categories } = products

  return (
        <div className={styles.main}>
          <Head>
            <title>{router?.query?.search ?? 'Busqueda'} | Mercado Libre</title>
          </Head>
            {items?.length === 0 || items === null
              ? <ListItemsEmpty />
              : (
                <>
                    <h1 style={{ display: 'none' }}>Resultados de la búsqueda</h1>
                    <section className={styles.breadcrumContainer}>
                        {categories?.length > 0 && <BreadCrumb items={categories} />}
                    </section>
                    <section className={styles.listItemsContainer}>
                        <ol className={styles.listItems}>
                            {items?.map((item) => <ProductItem key={item.id} product={item} />)}
                        </ol>
                    </section>
                </>
                )}
        </div>
  )
}

export async function getServerSideProps (context) {
  const { query, res } = context // get the query params from the url

  // if the query param is not present redirect to home
  if (!('search' in query)) {
    res.setHeader('location', '/')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  // make the request to the backend to get the items
  const response = await fetch(BACKEND_API + SEARCH_ITEMS(query.search))
  const data = await response?.json()

  // if response have more than 4 items, return only 4
  const productsItems = data?.items?.length > 4 ? data?.items?.slice(0, 4) : data?.items

  return {
    props: {
      products: {
        ...data,
        items: productsItems ?? null
      }
    }
  }
}

export default Items
