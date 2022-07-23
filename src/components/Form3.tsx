import { useForm } from "react-hook-form";
import Input3 from "./Input3";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IForm {
  firstname: string;
  lastname: string;
}

const schema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      firstname: "",
      lastname: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  return (
    <div className='form'>
      <h1>form 3</h1>
      <p>
        {" "}
        Using <strong>forwardRef</strong> inside 'Input' so you can register it as normal Input{" "}
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input3 label='firstname' placeholder='your name...' {...register("firstname")} />
        <Input3 label='lastname' placeholder='your name...' {...register("lastname")} />

        <button type='submit'>SUBMIT</button>
        <p className='error'>{errors?.firstname?.message}</p>
        <p className='error'>{errors?.lastname?.message}</p>
      </form>
    </div>
  );
};

export default Form;
