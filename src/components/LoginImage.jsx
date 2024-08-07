import loginImg from "../assets/images/login-screen.png";

function LoginImage() {
  return (
    <figure className="pr-6">
      <img
        src={loginImg}
        alt="login image"
        className="w-full object-cover h-[91vh] rounded-[16px]"
      />
    </figure>
  );
}

export default LoginImage;
