import { useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth);
  const loginHandler = e =>{
    e.preventDefault()
    dispatch(loginUserStart())
  }
  return (
    <div>
      <main className="form-signin w-25 m-auto text-center">
        <form>
          <img
            className="m-auto pb-2"
            src="https://media1.thehungryjpeg.com/thumbs2/ori_3656345_ykrqulvid8kmquzhy86g3sjunvdqvsc4z8r7ppkk_monogram-at-logo-design.jpg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <Input label={"Email address"} state={email} setState={setEmail} />
          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />
          <button className="btn btn-primary w-100 py-2" disabled={isLoading} onClick={loginHandler} type="submit">
            {isLoading ? 'Loading..' : 'Login'}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
}
export default Login
