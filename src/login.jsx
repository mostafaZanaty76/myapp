import  "./App.css";



function Login() {
  return (
    <section>
      <div className=" form-content">
        <h2 className="text-center">Login</h2>
        <form action="">
          <p>Username</p>
          <i></i>
          <input type="text" placeholder="type your username" />
          <p className="">Password</p>
          <i></i>
          <input col="30" type="password" placeholder="type your password" />
          <p className="text-end">
            <a href="#"  >Forget password?</a>
          </p>
          <button>LOGIN</button>
          <div className=" text-center icons-content">
            <p >Or Sign Up Using</p>
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
