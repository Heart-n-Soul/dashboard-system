import { LoginForm } from "../components/Forms";
import LoginHeader from "../components/LoginHeader";
import LoginImage from "../components/LoginImage";

function Login() {
  return (
    <div className="flex px-6 pt-8">
      <div className="hidden md:block w-6/12">
        <LoginImage />
      </div>
      <div className="w-full md:w-6/12">
        <LoginHeader />
        <div className="min-h-80 flex flex-col justify-center text-center w-10/12 md:w-8/12 mx-auto">
          <div>
            <h1 className="text-4xl mt-7 font-poppins font-semibold leading-[2.5rem]">
              Welcome Back
            </h1>
            <p className="font-poppins text-base mt-2 text-secondary font-light leading-[2.5rem] mb-6">
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
