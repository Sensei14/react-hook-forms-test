import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input3 from "./Input3";

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
    control,
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
      <h1>form 4</h1>
      <p>
        Using <strong>forwardRef</strong> inside 'Input' but registering it by{" "}
        <strong>Controller</strong> component this time
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='firstname'
          control={control}
          render={({ field }) => <Input3 label='fisrtname' {...field} />}
        />
        <Controller
          name='lastname'
          control={control}
          render={({ field }) => <Input3 label='lastname' {...field} />}
        />
        <button type='submit'>SUBMIT</button>
        <p className='error'>{errors?.firstname?.message}</p>
        <p className='error'>{errors?.lastname?.message}</p>
      </form>
    </div>
  );
};

export default Form;
