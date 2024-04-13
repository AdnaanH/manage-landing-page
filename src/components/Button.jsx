const Button = ({ children, bg = 'bg-FstrawberryRed', text = 'text-white', width = 'w-4/12' }) => {
  return (
    <button className={`${bg} ${text} ${width} px-6 py-2 font-BeVietnam shadow-md font-bold text-base rounded-3xl`}>{children}</button>
  );
};

export default Button;
