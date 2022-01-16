import './AppCart.css'
import Summary from './components/Summary'
import OrderList from './components/OrderList'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
]

//初始化狀態用的函式
const initState = (array) => {
  const state = []
  for (let i = 0; i < array.length; i++) {
    state.push(1)
  }
  return state
}

function App() {
  // 多樣產品狀態：陣列
  // ex. 三樣商品 -> [1,1,1]
  // 下面兩種方式均可
  // const [counts, setCounts] = useState([1, 1, 1])
  const [productList, setProductList] = useState(products)
  const [counts, setCounts] = useState(initState(productList)) //把products陣列丟進初始化函式裡，計算有多少種商品
  // const [counts, setCounts] = useState(Array(products.length).fill(1))

  //Summary
  // 計算目前所有的商品數量
  console.log(productList)
  const productCount = () => {
    let totalCount = 0
    for (let i = 0; i < productList.length; i++) {
      totalCount += counts[i]
    }
    return totalCount
  }

  // 計算目前所有的商品總價
  const total = () => {
    let totalamount = 0
    for (let i = 0; i < productList.length; i++) {
      totalamount += counts[i] * productList[i].price
    }
    return totalamount
  }
  // console.log(total())

  return (
    <div className="card">
      <div className="row">
        <OrderList
          // products={productList}
          counts={counts}
          setCounts={setCounts}
          productList={productList}
          setProductList={setProductList}
        />
        <Summary productCount={productCount()} total={total()} />
        {/* 呼叫函示，return回傳數字 */}
      </div>
    </div>
  )
}

//狀態為物件或陣列的操作基本步驟
// function App() {
//   const [counts, setCounts] = useState([1, 1, 1, 1])
//   const [product, setProduct] = useState({
//     name: 'iphone',
//     price: 15000,
//     stock: 5,
//   })

//   return (
//     <>
//       <button
//         onClick={() => {
//           const newCounts = [...counts]
//           newCounts[0] = newCounts[0] + 1
//           setCounts(newCounts)
//         }}
//       >
//         +
//       </button>
//       {counts[0]}
//       <button
//         onClick={() => {
//           const newCounts = [...counts]
//           newCounts[0] = newCounts[0] - 1
//           setCounts(newCounts)
//         }}
//       >
//         -
//       </button>

//       <button
//         onClick={() => {
//           const newCounts = [...counts]
//           newCounts[1] = newCounts[1] + 1
//           setCounts(newCounts)
//         }}
//       >
//         +
//       </button>
//       {counts[1]}
//       <button
//         onClick={() => {
//           const newCounts = [...counts]
//           newCounts[1] = newCounts[1] - 1
//           setCounts(newCounts)
//         }}
//       >
//         -
//       </button>

//       <button
//         onClick={() => {
//           const newProduct = { ...product }
//           newProduct.price = 20000
//           setProduct(newProduct)
//         }}
//       >
//         Change price to 20000
//       </button>
//     </>
//   )
// }

export default App
