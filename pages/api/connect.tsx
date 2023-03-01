//仮置き
//最終的にAPIに書き換える
export interface drinkListType{
    id: string
    ja: string
    price: number
}

export const productList: drinkListType[] = [
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