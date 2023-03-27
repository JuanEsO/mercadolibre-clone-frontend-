import styles from './breadcrumb.module.scss'

const BreadCrumb = ({ items }) => {
  return (
    <div className={styles.breadcrumb}>
      {items.map((item, index) => {
        return (
          <div key={index} className={styles.breadcrumb__item}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default BreadCrumb
