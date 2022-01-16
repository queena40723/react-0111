import { useState } from 'react'
import './Menu.css'

function Menu() {
  //狀態是紀錄被點到的陣列索引值
  const [selectedIndex, setSelectedIndex] = useState(-1) //hook
  const menuItems = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          //map(currentValue原陣列目前所迭代處理中的元素,index原陣列目前所迭代處理中的元素之索引。)
          //建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
          return (
            <li key={i}>
              <a
                href="#/"
                className={selectedIndex === i ? 'active' : 'notactive'}
                onClick={() => {
                  setSelectedIndex(i) //指向自己
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

// export default App //模組輸出
export default Menu
