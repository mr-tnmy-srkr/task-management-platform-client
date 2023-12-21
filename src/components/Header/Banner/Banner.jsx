import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animation from "../../../assets/animations/Animation - 1703182587090.json";

const Banner = () => {
  return (
    <div className="h-[90vh] md:h-[70vh] bg-slate-300 flex justify-around items-center  flex-col-reverse md:flex-row ">
      <div className="lg:w-[40%]  text-center space-y-4 pb-12 text-black px-12">
        <h1 className="text-3xl">Your Tasks, Our Solution.</h1>
        <p className="text-lg pb-4"> Simplify Your Life with Effortless Task Management</p>
        <Link to="/dashboard"  >
          <button className="btn btn-accent">Let’s Explore</button>
        </Link>
      </div>
      <div className="">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};
export default Banner;
