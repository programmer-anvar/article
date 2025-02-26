import AddCounter from "./AddCounter"
import MinusCounter from "./minusCounter"
import ResetCounter from "./ResetCounter"

const Counter = ({plusFun,minusFun,resetFun}) => {
  return (
    <div className='btn-group'>
        <AddCounter plusFun={plusFun}/>
        <MinusCounter minusFun={minusFun}/>
         <ResetCounter resetFun={resetFun}/>
    </div>
  )
}
export default Counter;
