import Button from "./Button";

function LoginHeader() {
  return (
    <header className="flex items-center justify-between mb-8 mt-[14px] ">
      <div>
        <h2 className="font-bold font-krona text-2xl text-primary-2">Orbút</h2>
      </div>
      <div className="flex gap-[1rem] items-center">
        <p className="max-lg:hidden font-light font-poppins text-secondary max-sm:text-[12px]">
          Don't have an account yet?
        </p>
        <Button typography="text-primary-2 font-poppins max-sm:text-[12px] md:font-medium border border-primary-2-light rounded-[20px] hover:bg-primary-2 hover:text-white">
          Sign up now
        </Button>
      </div>
    </header>
  );
}

export default LoginHeader;
