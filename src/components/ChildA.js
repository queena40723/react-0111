// import PropTypes from 'prop-types'
// function Child(props) {
//   console.log(props)
//   return <>{props.text}</>
// }

//有副作用的時候使用這個hooks
//[2-1]子女到父母傳遞資料-一呈現即送資料
// import { useEffect } from 'react'

// callback 資料傳送:子女到父母
// function ChildA(props) {
//   console.log(props)
//   const privateData = 'childA data'
//   //生命週期作法
//   useEffect(() => {
//     props.setData(privateData)
//   }, [])
//   return <></>

//[2].callback 資料傳送:子女到父母 =>
//   return (
//     <>
//   {/* //     <button */}
//   //       onClick={() => {
//   //         props.setData(privateData)
//   //       }}
//   //     >
//   //       送資料給父母元件
//   //     </button>
//     </>
//   )
// }

//[3]子女和子女沒辦法之間互相傳資料(一定要透過父母)
//a子女傳給父母再傳給b子女
function ChildA(props) {
  const privateData = 'Child A Data'

  return (
    <>
      <button
        onClick={() => {
          props.setData(privateData)
        }}
      >
        送資料給子女元件-B
      </button>
    </>
  )
}

// Child.propTypes = {
//限制怎麼使用Child
//限制接收到的屬性類型和必填
// text: PropTypes.string.isRequired,
//string,object,number
// }

//寫了上面的 propTypes 下面預設的會衝突
// Child.defaultProps = {
//   text: 'hi',
// }
export default ChildA
