import React from 'react'
import styles from './productItem.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const ProductItem = ({ product }) => {
  return (
    <Link href={`/items/${product.id}`}>
        <li className={styles.productItem}>
            <div className={styles.productItemContainer}>
                <div className={styles.productItemImgContainer}>
                    <Image src={product.picture} alt={product.title} width={180} height={180} className={styles.productItemImg} />
                </div>
                <div className={styles.productItemInfo}>
                    <div className={styles.productItemPrice}>
                        <span className={styles.productItemPriceCurrency}>$    </span>
                        <span className={styles.productItemPriceAmount}>{product.price.amount}</span>
                        {product.free_shipping && <img src="/images/ic_shipping.png" alt="Envio gratis" className={styles.productItemPriceShipping} />}
                    </div>
                    <div className={styles.productItemTitle}>
                        <h2>{product.title}</h2>
                    </div>
                </div>
                <div className={styles.productItemLocation}>
                    <span className={styles.productItemLocationText}>{product.location}</span>
                </div>
            </div>
        </li>
    </Link>
  )
}

export default ProductItem
