const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props}>{props.children}</button>
  );
  
  export default Button;
  