import { useEffect, useRef, useState } from 'react';
import authImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const LogIn = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password, captcha)
    }
    const handleValidetCaptcha = ()=>{
       const user_captcha_value = captchaRef.current.value;
       console.log(user_captcha_value)
       if (validateCaptcha(user_captcha_value)) {
        setDisable(false)
    }

    else {
       setDisable(true)
    }
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
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder='type captcha'
                  name='captcha'
                  ref={captchaRef}
                  className="input input-bordered"
                  required
                />
                <button onClick={handleValidetCaptcha} className='btn btn-outline btn-xs mt-4'>Validate</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disable} className='btn bg-[#D1A054] text-white hover:text-black' type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
