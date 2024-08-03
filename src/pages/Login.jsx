import { LoginForm } from "../components/Forms";
import Header from "../components/Header";
import LoginImage from "../components/LoginImage";

function Login() {
  // const baseStyle = "flex flex-col items-center justify-center h-screen";
  return (
    <div className="flex px-6 pt-8">
      <div className="hidden md:block w-6/12">
        <LoginImage />
      </div>
      <div className="w-full md:w-6/12">
        <Header />
        <div className="min-h-80 flex flex-col justify-center text-center w-10/12 md:w-8/12 mx-auto">
          <div>
            <h1 className="text-[40px] mt-7 font-semibold leading-[2.5rem]">
              Welcome Back
            </h1>
            <p className="font-poppins text-[16px] mt-2 text-secondary font-light leading-[2.5rem] mb-6">
              Sign in to manage your Campaigne
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
