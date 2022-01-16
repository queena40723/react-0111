import React from 'react'
import ProductItem from './ProductItem'

// 產品訂購的項目
//資訊會放元件檔案裡
//元件之間要互相傳遞資料要把狀態設在最上層的元素
// const products = [
//   {
//     id: 1,
//     name: '咖啡色 T-shirt',
//     category: 'Shirt',
//     image: 'https://i.imgur.com/1GrakTl.jpg',
//     price: 300,
//   },
//   {
//     id: 2,
//     name: '白色 T-shirt',
//     category: 'Shirt',
//     image: 'https://i.imgur.com/ba3tvGm.jpg',
//     price: 200,
//   },
//   {
//     id: 3,
//     name: '黑色 T-shirt',
//     category: 'Shirt',
//     image: 'https://i.imgur.com/pHQ3xT3.jpg',
//     price: 450,
//   },
// ]

function OrderList(props) {
  const { counts, setCounts, productList, setProductList } = props
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              {productList.length}種商品項目
            </div>
          </div>
        </div>
        {productList.map((v, i) => {
          return (
            <ProductItem
              key={v.id}
              name={v.name}
              category={v.category}
              image={v.image}
              price={v.price}
              counts={counts[i]}
              setCounts={(newCount) => {
                //先copy一個新的陣列
                const newCounts = [...counts]
                //對狀態做運算
                //更新陣列中本商品索引值
                newCounts[i] = newCount < 1 ? 1 : newCount

                //更新後的狀態，設定回原本的狀態裡去
                setCounts(newCounts)
              }}
              productListItem={v.id}
              productList
              setProductList={(deleteItem) => {
                // console.log(deleteItem)
                const newProductList = [...productList]
                let lists = newProductList.filter((item) => {
                  return item.id !== deleteItem
                })
                setProductList(lists)
                // console.log(lists)
              }}
            />
          )
        })}
        {/* {(products = productList)} */}
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
