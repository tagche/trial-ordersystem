//仮置き
//最終的にAPIに書き換える
export interface productListType{
    id: string
    ja: string
    price: number
}
export const foodList_fast: productListType[] = [
    {
        id: "humberger",
        ja: "ハンバーガー",
        price: 480
    },
    {
        id: "sandwich",
        ja: "サンドイッチ",
        price: 380
    },
    {
        id: "friedpotato",
        ja: "フライドポテト",
        price: 190
    }
]
export const foodList_jp: productListType[] = [
    {
        id: "sushi",
        ja: "寿司",
        price: 1280
    }
]
export const drinkList: productListType[] = [
    {
        id: "coffee",
        ja: "コーヒー",
        price: 480
    },
    {
        id: "tea",
        ja: "紅茶",
        price: 280
    },
    {
        id: "milk",
        ja: "ミルク",
        price: 180
    },
    {
        id: "coke",
        ja: "コーラ",
        price: 190
    },
    {
        id: "beer",
        ja: "ビール",
        price: 580
    }
]
export const fruitList: productListType[] = [
    {
        id: "apple",
        ja: "りんご",
        price: 150
    },
    {
        id: "banana",
        ja: "ばなな",
        price: 280
    },
    {
        id: "strawberry",
        ja: "いちご",
        price: 398
    },
    {
        id: "orange",
        ja: "みかん",
        price: 580
    }
]

export interface subCategoryType{
    id: string
    subCategoryJa: string
    subCategory: object[]
}
export interface categoryType{
    id: string
    ja: string
    child: subCategoryType[]
}
export const categoryList: categoryType[] = [
    {
        id: "food",
        ja: "たべもの",
        child: [{
            id: "1",
            subCategoryJa: "ファストフード・軽食",
            subCategory: [foodList_fast]
        },
        {
            id: "2",
            subCategoryJa: "和食",
            subCategory: [foodList_jp]
        }]
    },
    {
        id: "fruit",
        ja: "フルーツ",
        child: [{
            id: "1",
            subCategoryJa: "赤いフルーツ",
            subCategory: [fruitList]
        },
        {
            id: "2",
            subCategoryJa: "黄色いフルーツ",
            subCategory: [fruitList]
        }]
    },
    {
        id: "drink",
        ja: "飲み物",
        child: [{
            id: "1",
            subCategoryJa: "ホットドリンク",
            subCategory: [drinkList]
        },
        {
            id: "3",
            subCategoryJa: "その他",
            subCategory: [drinkList]
        }]
    }
]