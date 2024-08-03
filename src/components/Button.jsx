function Button({ children, bgColor, typography }) {
  return (
    <button className={`px-3 py-2 md:px-6 md:py-2  ${bgColor} ${typography}`}>
      {children}
    </button>
  );
}

export default Button;
