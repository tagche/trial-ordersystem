import { useState, createContext } from 'react'
//import Image from 'next/image'
import styles from '@/styles/Home.module.css'
//import { drinkListType, productList } from './api/connect'

import HeadMeta from './component/headMeta'
import Header from './component/header'
import Footer from './component/footer'
import ProductPanel from './component/product/panel'
import Cart from './component/product/cart'


export const TotalFeeContext = createContext([])
export type cartType = []

export default function Home() {
  const [cart, setCart] = useState([])

  return (
    <TotalFeeContext.Provider value={{cart, setCart}}>
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
    </TotalFeeContext.Provider>
  )
}
