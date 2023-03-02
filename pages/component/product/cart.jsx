import { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../index'
import { loginContext } from '../../index'

export default function Cart(){
    const {loginStatus, setLogin} = useContext(loginContext)
    const { cart, setCart } = useContext(cartContext)
    
    return (
        <>
            <ul>
                {
                    Object.values(cart).map(e => 
                        <li key={e.id}>
                        <p>{e.id}, {e.count}</p>
                        </li>
                    )
                }
            </ul>
            {
                loginStatus
                ? cart.length > 0 ? <button>購入手続きへ進む</button>: <p>カートは空です</p>
                : <p>ログインしてください</p>
            }
        </>
    )
}