import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input3 = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { label, ...rest } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...rest} ref={ref} />
    </div>
  );
});

export default Input3;
