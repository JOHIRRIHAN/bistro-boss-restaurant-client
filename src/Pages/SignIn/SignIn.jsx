import { useContext } from "react";
import authImg from "../../assets/others/authentication1.png";

import { AuthContext } from "../../Components/Providers/AuthProvider";
import { Link } from "react-router-dom";

const SignIn = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, );
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="p-10">
        <div className="hero min-h-screen shadow-2xl shadow-black ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img className="w-[600px]" src={authImg} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignIn} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign In</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
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
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                <input
                  
                  className="btn bg-[#D1A054] text-white hover:text-black"
                  type="submit"
                  value="Sign In"
                />
              </div>
              </form>
              <p className="text-center pb-5 text-lg">Already Have An Account? please <Link className="text-[#D1A054] font-bold" to={'/login'}>Log In</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;