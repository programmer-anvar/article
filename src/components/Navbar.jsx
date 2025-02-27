const Navbar = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <img className="w-[50px]" src="https://media1.thehungryjpeg.com/thumbs2/ori_3656345_ykrqulvid8kmquzhy86g3sjunvdqvsc4z8r7ppkk_monogram-at-logo-design.jpg" alt="" />
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/register">Register</a>
        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/login">Login</a>
      </nav>
      
    </div>
    </div>
  )
}

export default Navbar
