import { Path, UseFormRegister } from "react-hook-form";

interface Props<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
}

const Input1 = <T extends {}>(props: Props<T>) => {
  const { label, register, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...rest} {...register(props.name)} />
    </div>
  );
};

export default Input1;
