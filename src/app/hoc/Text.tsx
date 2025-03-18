const Text = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props}>{props.children}</p>
  );
  
export default Text;