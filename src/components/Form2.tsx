import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input2 from "./Input2";

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
      <h1>form 2</h1>
      <p>
        Using <strong>Controller</strong> component for rendering input and passing in all necessary
        props yourself.
        <br />
        There is no ref passed here and used in 'Input'
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='firstname'
          control={control}
          render={({ field: { name, onBlur, onChange, value } }) => (
            <Input2
              label='fisrtname'
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name='lastname'
          control={control}
          render={({ field: { name, onBlur, onChange, value } }) => (
            <Input2
              label='lastname'
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <button type='submit'>SUBMIT</button>
        <p className='error'>{errors?.firstname?.message}</p>
        <p className='error'>{errors?.lastname?.message}</p>
      </form>
    </div>
  );
};

export default Form;
