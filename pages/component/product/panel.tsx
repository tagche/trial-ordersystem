import { useState, useEffect, useContext } from 'react'
import { drinkListType, productList } from '../../api/connect'
import { cartContext } from '../../index'


//商品毎の注文数をハンドリング
export function CountControl(e: drinkListType){
    const [ count, setCount ] = useState(0)
    const { cart, setCart } = useContext(cartContext)

    const handleCount = (flag: boolean, id: string | number) => {

        if(flag && count < 10){
            // 商品数増加時の処理
            let addFlag = false

            //カート内に対象商品があれば個数を変更
            Object.values(cart).forEach((e: any, i: number) => {
                if(e.id != id) return false
                cart[i].count = count + 1
                addFlag = true
                setCart([...cart]) //cartを再代入してカート内容を再レンダリング
            })

            //カート内に対象商品がない場合は追加
            if(!addFlag){
                setCart([...cart, {
                    id: id,
                    count: count + 1
                }])
            }
            setCount(count + 1)
        }
        else if(!flag && count > 0){
            // 商品数減少時の処理
            if(count == 1){
                //商品をカートから削除
                Object.values(cart).forEach((e: any, i: number) => {
                    if(e.id != id) return false
                    cart.splice(i, 1)
                    setCart([...cart]) //cartを再代入してカート内容を再レンダリング
                })
            }else{
                //商品の個数を変更
                Object.values(cart).forEach((e: any, i: number) => {
                    if(e.id != id) return false
                    cart[i].count = count - 1
                    setCart([...cart]) //cartを再代入してカート内容を再レンダリング
                })
            }
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button key={e.id + "1"} onClick={() => {
                handleCount(true, e.id)
            }}>+</button>
            {count}
            <button key={e.id} onClick={() => {
                handleCount(false, e.id)
            }}>-</button>
        </div>
    )
}

//商品一覧をレンダリング
export default function ProductPanel(){
    return (
        <ul>
            {
                productList.map((e: drinkListType) => (
                    <li key={e.id}>
                        <p>{e.ja}</p>
                        <CountControl {...e} />
                    </li>
                ))
            }
        </ul>
    )
}
