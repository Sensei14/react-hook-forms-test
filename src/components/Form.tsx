import { useForm } from "react-hook-form";
import Input1 from "./Input1";
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
      <h1>form 1</h1>
      <p>
        Passing <strong>register</strong> function as a prop to input and registering it there
        inside.
        <br />
        Here you need to make sure that <strong>name</strong> props is required in 'Input' component
        so it registers correctly.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input1 label='firstname' placeholder='your name...' name='firstname' register={register} />
        <Input1 label='lastname' placeholder='your name...' name='lastname' register={register} />

        <button type='submit'>SUBMIT</button>
        <p className='error'>{errors?.firstname?.message}</p>
        <p className='error'>{errors?.lastname?.message}</p>
      </form>
    </div>
  );
};

export default Form;
