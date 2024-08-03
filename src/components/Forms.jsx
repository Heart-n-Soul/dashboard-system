import Button from "./Button";
import InputField from "./InputField";
import "../assets/css/input.css";

function LoginForm() {
  return (
    <form className="flex-col">
      <div className="relative">
        <InputField type="email" placeholder="" />
        <label class="absolute font-poppins text-[12px] md:text-[14px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-2 left-2.5">
          Email Address
        </label>
      </div>
      <div className="relative">
        <InputField type="password" placeholder="" />
        <label class="absolute font-poppins text-[12px] md:text-[14px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-2 left-2.5">
          Password
        </label>
      </div>
      <Button bgColor="bg-primary-2" typography="text-white mb-4 mt-4 font-poppins rounded-[20px] w-full">Login</Button>
      <p className="font-medium text-primary-2 text-base leading-6 font-poppins">
        <a href="#">Forgot Password?</a>
      </p>
    </form>
  );
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
