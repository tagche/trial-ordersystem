import { useState, useEffect, useContext } from 'react'
import { productListType, productTable } from '../../api/connect'
import { cartContext } from '../../'
import styles from '@/styles/Home.module.css'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';



//商品毎の注文数をハンドリング
export function CountControl(e: productListType){
    const { cart, setCart } = useContext(cartContext)
    
    const [ count, setCount ] = useState(0)
    const [ disable1, setDisable1 ] = useState(false)
    const [ disable2, setDisable2 ] = useState(true)

   
    const handleCount = (flag: boolean) => {
        const id = e.id
        if(flag && count < 3){
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
                    ja: e.ja,
                    price: e.price,
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
    const handleDisable = (flag: boolean) => {
        if(flag){
            if(count == 2) setDisable1(true)
            if(count == 1) setDisable2(false)
        }else{
            if(count == 3) setDisable1(false)
            if(count == 1) setDisable2(true)
        }
    }

    return (
        <div>
            <Button variant="contained" key={e.id + "1"} disabled={disable1}
                onClick={() => {
                    handleCount(true)
                    handleDisable(true)
                }}>+</Button>
            {count}
            <Button variant="contained" key={e.id} disabled={disable2} onClick={() => {
                handleCount(false)
                handleDisable(false)
            }}>-</Button>
        </div>
    )
}

//商品一覧をレンダリング
export default function ProductPanel(props: string = ""){
    const category = props.category 
        ? productTable[props.category]
        : "all"
    
    
    const [ productData, setData ] = useState([{}])
    useEffect(() => {
        //firebaseからデータ取得
        const getProducts = collection(db, "products")
        
        getDocs(getProducts)
            .then((snapShot) => {
                snapShot.docs.map((doc) => {
                    setData([...productData, doc.data()])
                })
            })        
    }, [])
    

    return (
        <>
            {
                productData.map((e) => (
                    //console.log(e.foodList_jp)
                    Object.values(e).map((list) => console.log(list[0].id))
                    
                ))
            }
        <ul className={styles.productList}>
            {
                category !== "all" &&
                    <Grid container spacing={4}>
                        {category.map((e: productListType) => (
                        <Grid item key={e.id} xs={12} sm={6} md={4} sx={{marginBottom: "1em"}}>
                            <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                            <CardMedia
                                component="img"
                                sx={{
                                 16:9
                                }}
                                image="https://unsplash.it/800/600/?random"
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6" component="h2">
                                {e.ja}
                                </Typography>
                                <Typography>
                                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    pb: "1em"
                                }}>
                                <CountControl {...e} />
                            </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
            }

            {
                category == "all" &&
                    <>
                    {
                        Object.values(productTable).map((arr, i: number) => (
                            //console.log(arr[0])
                            <Grid container key={i} spacing={4}>
                                {arr.map((e: productListType) => (
                                <Grid item key={e.id} xs={12} sm={6} md={4} sx={{marginBottom: "2em"}}>
                                    <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                        16:9
                                        }}
                                        image="https://unsplash.it/800/600/?random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6" component="h2">
                                        {e.ja}
                                        </Typography>
                                        <Typography>
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            pb: "1em"
                                        }}>
                                        <CountControl {...e} />
                                    </CardActions>
                                    </Card>
                                </Grid>
                                ))}
                            </Grid>
                        ))
                    }
                    </>
            }
        </ul>
        </>
    )
}
