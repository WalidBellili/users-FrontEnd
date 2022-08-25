const Button = ({ type, text, className }) => {
  return (
    <div>
      <button type={type} className={className}>
        {text}
      </button>
    </div>
  );
};

export default Button;
