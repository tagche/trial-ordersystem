import { useState, createContext } from 'react'
//import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HeadMeta from './component/foundation/headMeta'
import Header from './component/foundation/header'
import Footer from './component/foundation/footer'
import ProductPanel from './component/product/panel'
import loginStatus from './component/module/loginControl'
import Cart from './component/product/cart'


export const loginContext = createContext(false)
export const cartContext = createContext([])


export default function Home() {
  const [cart, setCart] = useState([])
  const [loginStatus, setLogin] = useState(false)

  return (
    <loginContext.Provider value={{loginStatus, setLogin}}>
    <cartContext.Provider value={{cart, setCart}}>
      <HeadMeta />
      <Header />
      <main className={styles.main}>
        <nav className={styles.nav}>
          aaa
        </nav>
        <div>
          <ProductPanel />
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
      </main>
      <Footer />
    </cartContext.Provider>
    </loginContext.Provider>
  )
}
