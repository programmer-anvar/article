import { useDispatch } from "react-redux"
import { minuscounter } from "../reducers/countSlice"

const MinusCounter = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button className='btn btn-secondary' onClick={() => dispatch(minuscounter())}>-</button>
    </div>
  )
}

export default MinusCounter
