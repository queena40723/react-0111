// import { useState } from 'react'
// import { data } from './data/index'

// import React from 'react'

// function App() {
//   const [total, setTotal] = useState(0) //useState(0)執行後，回傳一個陣列[獲得值的變數,設定值的函數]
//   return (
//     //<h1></h1> 是介面
//     <>
//       <h1
//         onClick={() => {
//           //{}在html裡寫入js要用的 //加入事件監聽一定要是函式
//           setTotal(total + 1)
//         }}
//       >
//         {total}
//       </h1>
//       <button>+1</button>
//       <button>-1</button>
//     </>
//   )
// }

// function App() {
//   return (
// true/false/null/undefined 在網頁上不會顯示
// 物件只能當作值
// <>
//   <h2>數字</h2>
//   {123}
//   {123 + 1}
//   <h2>布林值</h2>
//   {true}
//   {false}
//   <h2>字串</h2>
//   {'abc'}
//   <h2>null/undefined</h2>
//   {null}
//   {undefined}
//   <h2>陣列</h2>
//   {[1, 2, 'hi']}
//   <h2>物件(錯誤)</h2>
//   {/* {{ a: 1, b: 2 }} */}
//   <h2>函式</h2>
//   {() => {
//     console.log('123')
//   }}

{
  /* <FC />
        <CC />
        <Menu /> */
}
// </>
// }

// function App() {
//   return (
//     <>
//       <table border="1">
//         {data.map((v, i) => {
//           console.log('簡單的,確定的語句')
//           //return可以省略 但是不要太省
//           //map在哪，key值就在哪(在外層元素裡)，
//           return (
//             <tr key={i}>
//               <td>{v.id}</td>
//               <td>{v.name}</td>
//               <td>{v.birth}</td>
//             </tr>
//           )
//         })}
//       </table>
//     </>
//   )
// }

// function Menu() {
//   return (
//     <>
//       <ul>
//         <li>
//           <a>首頁</a>
//         </li>
//         <li>
//           <a>關於我們</a>
//         </li>
//         <li>
//           <a>產品</a>
//         </li>
//       </ul>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       {data.map((v, i) => {
//         return (
//           //Fragment ==  <></> 讓你可以直接返回一組元素，而不需要增加多餘的 DOM 節點。
//           <React.Fragment key={i}>
//             <div>{v.name}</div>
//           </React.Fragment>
//         )
//       })}
//     </>
//   )
// }

// function App() {
//   const [total, setTotal] = useState(0)
//   return (
//     <>
//       <button
//         onClick={() => {
//           setTotal(total + 1)/*為一能改變常數total要用setTotal寫，react裡的寫法設計 */
//           /*不能寫成 total=total + 1 ，因為在上方就把total宣告成常數*/
//         }}
//       >
//         +
//       </button>
//       {total}
//       <button
//         onClick={() => {
//           setTotal(total - 1)
//         }}
//       >
//         -
//       </button>
//       <div>{total > 10 && '最多買10件'}</div>
//       <div>{total > 0 && total < 10 && `購買'${total}'件`}</div>
//     </>
//   )
// }

// function App() {
//   const [total, setTotal] = useState(0)
//   return (
//     <>
//       <button
//         onClick={() => {
//           setTotal(
//             total + 1
//           ) /*為一能改變常數total要用setTotal寫，react裡的寫法設計 */
//           /*不能寫成 total=total + 1 ，因為在上方就把total宣告成常數*/
//           console.log(
//             total
//           ) /*會得到 setTotal改變前的狀態，因為setState(setTotal)是異步執行，console.log()在setState前被執行*/

//           // 方法一 :先用變數接
//           const newTotal = total + 1
//           setTotal(newTotal)
//           console.log(newTotal)
//         }}
//       >
//         +
//       </button>
//       {total}
//       <button
//         onClick={() => {
//           setTotal(total - 1)
//         }}
//       >
//         -
//       </button>
//       <div>{total > 10 && '最多買10件'}</div>
//       <div>{total > 0 && total < 10 && `購買'${total}'件`}</div>
//     </>
//   )
// }

// function App() {
//   const [total, setTotal] = useState(0)
//   return (
//     <>
//       <button
//         onClick={() => {
//           setTotal(
//             total + 1
//           ) /*為一能改變常數total要用setTotal寫，react裡的寫法設計 */
//           /*不能寫成 total=total + 1 ，因為在上方就把total宣告成常數*/
//           console.log(
//             total
//           ) /*會得到 setTotal改變前的狀態，因為setState(setTotal)是異步執行，console.log()在setState前被執行*/

//           // 方法一 :先用變數接
//           const newTotal = total + 1
//           setTotal(newTotal)
//           console.log(newTotal)
//         }}
//       >
//         +
//       </button>
//       {total}
//       <button
//         onClick={() => {
//           setTotal(total - 1)
//         }}
//       >
//         -
//       </button>
//       <div>{total > 10 && '最多買10件'}</div>
//       <div>{total > 0 && total < 10 && `購買'${total}'件`}</div>
//     </>
//   )
// }
