import { useContext, useEffect,  useState } from "react";
import authImg from "../../assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Components/Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const LogIn = () => {
  const [disable, setDisable] = useState(true);
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
            title: "Good job!",
            text: "User Log In Successfully✅!",
            icon: "success"
          });
          navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleValidetCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div className="p-10">
      <Helmet>
        <title>Bistro Boss || SignIn</title>
      </Helmet>
      <div className="hero min-h-screen shadow-2xl shadow-black ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-[600px]" src={authImg} alt="" />
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
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="type captcha"
                  name="captcha"
                  onBlur={handleValidetCaptcha}
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disable}
                  className="btn bg-[#D1A054] text-white hover:text-black"
                  type="submit"
                  value="Log In"
                />
              </div>
            </form>
            <p className="text-center pb-5 text-lg">
              New Here? please{" "}
              <Link className="text-[#D1A054] font-bold" to={"/signin"}>
                Create Account
              </Link>
            </p>
            <p className="text-center"><SocialLogin></SocialLogin></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
