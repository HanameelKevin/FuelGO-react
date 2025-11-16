const Button = ({ children, variant = 'primary', onClick }) => {
  const base = "px-4 py-2 rounded font-semibold transition";
  const styles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return <button className={`${base} ${styles[variant]}`} onClick={onClick}>{children}</button>;
};
export default Button;