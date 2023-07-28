const Button = ({ customClass, onClick, children }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
