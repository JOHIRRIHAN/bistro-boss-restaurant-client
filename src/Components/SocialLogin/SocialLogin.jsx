import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn } = useAuth();
    const axiosPublic = useAxiousPublic();
    const navigate = useNavigate()
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            const userInfo ={
                email: result.user?.email,
                displayName: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
                navigate('/')
            })
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
