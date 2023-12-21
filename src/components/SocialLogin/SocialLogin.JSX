import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // Handle Social SignIn
  const handleSocialLogin = async (media) => {
    const toastId = toast.loading("Signing in ...");
    try {
      //User Registration using google
      const result = await media();
      console.log(result);

      navigate(from, { replace: true });
      toast.success("Login Successful", { id: toastId });
    } catch (err) {
      // console.log(err)
      toast.error(err?.message, { id: toastId });
    }
  };

  return (
    <div
      onClick={() => handleSocialLogin(googleSignIn)}
      className="flex justify-center items-center space-x-2 border p-2 mt-4  border-gray-300 border-rounded cursor-pointer"
    >
      <FcGoogle size={32} />

      <p>Continue with Google</p>
    </div>
  );
};

export default SocialLogin;
