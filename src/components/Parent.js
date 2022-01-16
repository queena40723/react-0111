// import React from 'react'
import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

// import YoutubePlayer from './YoutubePlayer'
//只能從父母傳資料給子女
//誰用誰，誰就是父母
//單向資料流
//屬性在 React 中是單向流動的：從父級到子元素。
//預設屬性 => 父母沒給預設時，子元素要自己設定自己的預設
// function Parent(props) {
//   return (
//     <>
//       <Child text="hello" />
//       {/*text屬性名稱 */}
//       {/* <Child /> */}
//       {/* <YoutubePlayer /> */}
//     </>
//   )
// }

function Parent(props) {
  const [data, setData] = useState('')

  //[2]callback 子女到父母 =>
  // return (
  //  <>
  //    <Child setData={setData} />
  // <hr />
  // {data}
  //     </>
  // )

  //[3]子女元件互傳資料 =>
  return (
    <>
      <h2>Child A</h2>
      <ChildA setData={setData} />
      <h2>Child B</h2>
      <ChildB data={data} />
    </>
  )
}
export default Parent
