import { UseFormRegister } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input2 = (props: Props) => {
  const { label, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};

export default Input2;
