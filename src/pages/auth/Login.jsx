import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full  md:hidden block bg-white px-[24px]">
      <div className="space-y-[12px] mt-[14.51px]">
        <h1 className="text-[24px] font-[700] gradient-text">Sign in</h1>
        <p>Enter your login details to get started</p>
      </div>
      <form className="mt-[34px]">
        <div className="flex flex-col gap-y-[24px]">
          <div className="flex flex-col gap-y-[6px]">
            <label htmlFor="">Student ID</label>
            <input
              type="text"
              className="w-full rounded-[10px] px-[8px] border-[0.5px] outline-none bg-[#F7F8FA] border-[#CDDBF8] h-[48px]"
            />
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="w-full rounded-[10px] px-[8px] border-[0.5px] outline-none bg-[#F7F8FA] border-[#CDDBF8] h-[48px]"
            />
          </div>
        </div>
        <button className="w-full signin-button mt-[48px] py-[16px] text-white">
          Sign in
        </button>
        <p className="mt-[24px]">
          You do not have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
