import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
    const {googleSignIn } = useAuth();
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        
    }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">
        <FaGoogle className="text-xl text-blue-800"/>
        Button
      </button>
    </div>
  );
};

export default SocialLogin;
