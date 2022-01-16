import { useState } from 'react'

function FC() {
  //函式型元件
  const [total, setTotal] = useState(0) //執行後，回傳一個陣列[獲得值的變數,設定值的函式]
  return (
    //<h1></h1>是介面
    <>
      <h1
        onClick={() => {
          //{}在html裡寫入js要用的 //加入事件監聽一定要是函式
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      <button>+1</button>
      <button>-1</button>
    </>
  )
}

export default FC
