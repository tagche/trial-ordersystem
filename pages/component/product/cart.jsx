import { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../index'

export default function Cart(){
    const { cart, setCart } = useContext(cartContext)
    
    return (
        <ul>
            {
                Object.values(cart).map(e => 
                    <li key={e.id}>
                    {e.id}
                    <p>{e.id}, {e.count}</p>
                    </li>
                )
            }
        </ul>
    )
}