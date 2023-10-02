import AppLogo from "../../components/AppLogo/AppLogo";
import { FIELDS } from "./constant";
import FormInputField from "../../components/FormInputField/FormInputField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const PasswordReset = () => {
  const schema = z
    .object({
      new_password: z
        .string()
        .min(8, { message: "Password must be atleast 8 characters" })
        .max(32),
      confirm_new_password: z.string(),
    })
    .refine((data) => data.new_password === data.confirm_new_password, {
      message: "Password does not match",
      path: ["confirm_new_password"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data, typeof data);

    // mutation.mutate(
    //     formData,
    //     {
    //         onError: (error) => {
    //             toast.show(error.message, 'error');
    //         },
    //         onSuccess: (data) => {
    //             // set the user's CV identifier
    //             if (data.identifier) {
    //                 load(data);
    //             }

    //             navigator('/review-resume');
    //             toast.show('Your resume has been created successfully', 'success');
    //         },
    //     }
    // );
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FFFFFF]">
      <div
        className="flex flex-col flex-shrink-0 items-center md:border-[.5px] md:rounded-[5px] bg-[#FFFFFF]
        md:border-[#200E32] md:border-opacity-[0.15] w-full md:w-[310px]"
      >
        <div className="flex flex-col justify-center items-center md:py-[15px] gap-[15px]">
          <AppLogo tw_classes={[" scale-[.7] font-semibold"]} />
          <h5 className="capitalize text-[#000714] text-center text-[16px] leading-[21px] font-medium tracking-[-0.072px]">
            reset password?
          </h5>
          <p className="text-[#000714] text-center text-[10px] font-medium leading-[15px] tracking-[-0.045px] max-w-[200px]">
            Your new password must be different to the previously new password.
          </p>
        </div>
        <form
          className="max-w-[90%] md:max-w-[270px] mx-auto flex flex-wrap text-[13px] mt-2 mb-[30px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {FIELDS.map((field, index) => (
            <FormInputField
              key={index}
              {...field}
              register={register}
              errors={errors}
            />
          ))}

          <Button
            variant="contained"
            type="submit"
            className="!capitalize !bg-[#0062E0] !mt-[35px] !w-full !flex-shrink-0 rounded-[5px]
          !justify-center !items-center !h-[40px] !font-medium !text-[14px] !tracking-[-0.054px] !leading-[21px]"
          >
            reset password
          </Button>
        </form>
        <Divider
          className="uppercase w-full mx-auto text-[#1B263A] text-[18px] leading-[21px] 
          tracking-[-0.054px] stroke-[#C4C4C4]"
        />

        <span className="text-center text-[11px] font-normal tracking-[-0.045px] leading-[21px] flex gap-[5px] my-[14px]">
          <p className="text-[#000714]">Back to</p>
          <a href="login" className="text-[#0062E0]">
            Login
          </a>
        </span>
      </div>
    </div>
  );
};

export default PasswordReset;
