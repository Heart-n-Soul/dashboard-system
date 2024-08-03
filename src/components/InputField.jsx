function InputField(
  { type, placeholder, height, id, width = "w-full" },
  props
) {
  return (
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      //className={`border border-input rounded-md mb-4 p-2 focus:border-[1.5px] focus:outline-input-focus placeholder:text-[13px] ${height} ${width}`}
      className=" w-full px-2.5 pb-2.5 pt-5 mb-4 text-sm text-gray-900 bg-white border border-input rounded-lg focus:outline-primary-2 focus:ring-0 peer"
    />
  );
}

export default InputField;
