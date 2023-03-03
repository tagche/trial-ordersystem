import { useState, createContext } from 'react'
//import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HeadMeta from './component/foundation/headMeta'
import Header from './component/foundation/header'
import Footer from './component/foundation/footer'

import ProductPanel from './component/product/panel'
import Cart from './component/product/cart'
import Nav from './component/product/nav'
import { categoryList, productTable } from './api/connect'
import Typography from '@mui/material/Typography';


export const loginContext = createContext<Boolean>(false)
export const cartContext = createContext([""])

export default function Home(props: string = "") {
  const [cart, setCart] = useState([])
  const [loginStatus, setLogin] = useState(false)

  let categoryName = ""
  categoryList.map((e) => {
    e.child.map((el) => {
      if(el.id == props.category) categoryName = el.subCategoryJa
    })
  })

  const categoryHeader = !props.category
    ? "すべての商品"
    : categoryName

  return (
    <loginContext.Provider value={{loginStatus, setLogin}}>
    <cartContext.Provider value={{cart, setCart}}>
      <HeadMeta />
      <Header />
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Nav />
        </nav>
        <div>
          <Typography gutterBottom variant="h4" component="h2">{categoryHeader}</Typography>
          <ProductPanel category={props.category} />
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
