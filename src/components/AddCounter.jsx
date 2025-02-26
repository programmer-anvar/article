import { useDispatch } from "react-redux"
import { plusCounter } from "../reducers/countSlice"

const AddCounter = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button className='btn btn-success' onClick={() => dispatch(plusCounter())}>+</button>
    </div>
  )
}

export default AddCounter
