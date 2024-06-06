import authImg from '../../assets/others/authentication1.png'

const LogIn = () => {
    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
  return (
    <div className="p-10">
      <div className="hero min-h-screen shadow-2xl shadow-black ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className='w-[600px]' src={authImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name='password'
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className='btn bg-[#D1A054] text-white hover:text-black' type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
