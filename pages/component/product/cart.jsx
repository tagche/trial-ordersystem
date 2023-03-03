import { useContext } from 'react'
import { Divider } from '@mui/material'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

import { cartContext, loginContext } from '../../index'
import LoginControl from "../module/loginControl"

import styles from '@/styles/cart.module.css'

export default function Cart(){
    const {loginStatus, setLogin} = useContext(loginContext)
    const { cart, setCart } = useContext(cartContext)
    
    return (
        <>
        <Paper elevation={1} sx={{padding: '1em'}}>
            {
                cart.length > 0 &&
                <>
                    <ul>
                        {
                            Object.values(cart).map(e => 
                                <li key={e.id} className={styles.side}>
                                    <img src="https://unsplash.it/800/600/?random" alt="" width="100" />
                                    <p>{e.ja}<br />{e.count}点</p>
                                    
                                </li>
                            )
                        }
                    </ul>
                    <Divider sx={{margin: '1em 0'}} />
                </>
            }
            {
                loginStatus
                ? cart.length > 0 ? <button>購入手続きへ進む</button>: <><p>カートは空です</p></>
                : <><p>ログインしてください</p></>
            }

            <LoginControl />
        </Paper>
        </>
    )
}