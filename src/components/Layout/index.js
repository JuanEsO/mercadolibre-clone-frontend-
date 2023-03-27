import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Layout.module.scss'

function Layout ({ children }) {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(search)
    router.push(`/items?search=${search}`)
  }

  return (
    <div>
        <header>
            <nav className={styles.navContainer}>
                <div className={styles.navBar}>
                    {/* LOGO */}
                    <div className={styles.logo}>
                        <Link href="/">
                            <img src="/images/Logo_ML.png" alt="logo" className={styles.logoImg} />
                        </Link>
                    </div>
                    <div className={styles.searchBarContainer}>
                        <form className={styles.searchBar} onSubmit={handleSearch}>
                            <input
                                type='text'
                                placeholder="Nunca dejes de buscar"
                                className={styles.searchInput}
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <button type="submit" className={styles.searchButton}>
                                <img src="/images/ic_Search.png" alt="search" className={styles.searchImg} />
                            </button>
                        </form>
                    </div>

                </div>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout
