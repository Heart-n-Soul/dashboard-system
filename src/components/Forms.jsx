import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, validateForm } from "../redux/loginSlice";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";
import { signIn } from "../api";
import { setToken } from "../redux/campaignSlice"; // Assuming you store the token in the campaign slice



const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, isEmailValid, isFormValid, errorMessage } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(validateForm());
  }, [email, password, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
    ;
        const data = await signIn(email, password );

        // Store the token in Redux and local storage
        const { access_token } = data.data;
        dispatch(setToken(access_token));
        localStorage.setItem("authToken", access_token);

        // Redirect to the dashboard
        navigate("/dashboard");
      } catch (error) {
        alert(`Login failed: ${error.message}`);
      }
    }
  };

  return (
    <form className="flex-col" onSubmit={ handleLogin}>
      <div className="relative mb-6">
        <InputField
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          className={`w-full px-2.5 pb-2.5 pt-5 mb-1 text-sm text-gray-900 bg-white border rounded-lg focus:outline-primary-2 focus:ring-0 peer ${
            !isEmailValid
              ? "border-red-500 placeholder-red-500"
              : "border-input"
          }`}
        />
        <label
          className={`absolute font-poppins text-[12px] md:text-[14px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 ${
            !isEmailValid ? "text-red-500" : "peer-focus:text-primary-2"
          }  left-2.5`}
        >
          Email Address
        </label>
        {!isEmailValid && (
          <p className="text-red-500 text-sm text-left">{errorMessage}</p>
        )}
      </div>
      <div className="relative">
        <InputField
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          className="w-full px-2.5 pb-2.5 pt-5 mb-4 text-sm text-gray-900 bg-white border border-input rounded-lg focus:outline-primary-2 focus:ring-0 peer"
        />
        <label className="absolute font-poppins text-[12px] md:text-[14px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-2 left-2.5">
          Password
        </label>
      </div>
      <Button
        bgColor={isFormValid ? "bg-primary-2" : "bg-indigo-200"}
        typography="text-white mb-4 mt-4 font-poppins rounded-[20px] w-full"
        type="submit"
        disabled={!isFormValid}
      >
        Login
      </Button>
      <p className="font-medium text-primary-2 text-base leading-6 font-poppins">
        <a href="#">Forgot Password?</a>
      </p>
    </form>
  );
};

{
  /* <InputField type="password" placeholder="" />
<label class="absolute font-poppins text-[12px] md:text-[14px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-2 left-2.5">
  Password
</label> */
}

function CreateCampaignForm() {
  return (
    <div>
      <form>
        <InputField type="text" placeholder="Campaign Name" />
      </form>
    </div>
  );
}

function UpdateCampaignForm() {
  return (
    <div>
      <form>
        <InputField type="text" placeholder="Campaign Name" />
      </form>
    </div>
  );
}

export { LoginForm, CreateCampaignForm, UpdateCampaignForm };
