import "./App.css";

function Login() {
  return (
    <section>
      <div className=" form-content">
        <h2 className="text-center">Login</h2>
        <form action="">
          <p>Username</p>
          {/* <i className="fa-solid fa-user"></i> */}
          <input type="text" placeholder="type your username" />
          <p className="">Password</p>
          {/* <i className="fa-solid fa-lock"></i>     */}
                <input col="30" type="password" placeholder="type your password" />
          <p className="text-end">
            <a className="m-1 ">Forget password?</a>
          </p>
          <button className="text-center">LOGIN</button>
          <div className=" text-center icons-content">
            <p>Or Sign Up Using</p>
            {/* <i className="fa-brands facebook icon fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google"></i> */}

            <div className="icons">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          <div className="text-center text-light form-text">
            <p>Or Sign Up Using</p>
            <p>signup</p>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Login;
